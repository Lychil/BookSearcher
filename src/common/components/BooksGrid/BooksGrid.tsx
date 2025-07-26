import styles from '@/common/components/BooksGrid/BooksGrid.module.css';
import BookCard from '@/common/components/BookCard/BookCard';
import { useBooks } from '@/hooks/useBooks';
import { BookCardSkeleton } from '@/common/skeletons/BookCardSkeleton';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const BooksGrid = () => {
    const location = useLocation();
    const query = useMemo(() => {
        const params = new URLSearchParams(location.search);
        return params.get('query');
    }, [location.search]);

    const { data: books, isFetching, isError } = useBooks({ query: query });

    if (!isFetching && books.length === 0) return <div style={{marginTop: "20px"}}>Ничего не найдено</div>
    if (isError) return <div style={{marginTop: "20px"}}>Ошибка загрузке</div>;

    return (
        <div className={styles.booksGrid}>
            {
                isFetching ?
                    [...Array(10).keys()].map((key) => <BookCardSkeleton key={`skeleton-${key}`} />)
                    :
                    books.map(book => (<BookCard key={book.id} book={book} />))
            }
        </div>
    );
};