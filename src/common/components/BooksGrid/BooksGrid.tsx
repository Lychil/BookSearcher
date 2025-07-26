import { useEffect, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '@/common/components/BooksGrid/BooksGrid.module.css';
import BookCard from '@/common/components/BookCard/BookCard';
import { useBooks } from '@/hooks/useBooks';
import { BookCardSkeleton } from '@/common/skeletons/BookCardSkeleton';

export const BooksGrid = () => {
    const location = useLocation();
    const loaderRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const query = useMemo(() => {
        const params = new URLSearchParams(location.search);
        return params.get('query');
    }, [location.search]);

    const {
        data,
        isFetching,
        isError,
        fetchNextPage,
        hasNextPage
    } = useBooks({ query });

    useEffect(() => {
        if (!hasNextPage || isFetching) return;

        const options = {
            root: null,
            rootMargin: '20px',
            threshold: 0.1
        };

        observerRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                fetchNextPage();
            }
        }, options);

        if (loaderRef.current) {
            observerRef.current.observe(loaderRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [fetchNextPage, hasNextPage, isFetching]);

    const books = data?.pages.flat() || [];

    if (!isFetching && books.length === 0) {
        return <div style={{ marginTop: "20px" }}>Ничего не найдено</div>;
    }

    if (isError) {
        return <div style={{ marginTop: "20px" }}>Ошибка загрузки</div>;
    }

    return (
        <div className={styles.booksGrid}>
            {books.map(book => (
                <BookCard key={book.id + Math.floor(100000 + Math.random() * 900000).toString()} book={book} />
            ))}

            {isFetching && (
                [...Array(20).keys()].map((key) => (
                    <BookCardSkeleton key={`skeleton-${key}`} />
                ))
            )}

            {!isFetching && <div ref={loaderRef} style={{ height: '20px' }} />}
        </div>
    );
};