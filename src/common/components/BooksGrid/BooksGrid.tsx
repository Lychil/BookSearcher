import styles from '@/common/components/BooksGrid/BooksGrid.module.css';
import BookCard from '@/common/components/BookCard/BookCard';
import { useBooks } from '@/hooks/useBooks';
import { BookCardSkeleton } from '@/common/skeletons/BookCardSkeleton';

export const BooksGrid = () => {
    const { data: books, isFetching, isError } = useBooks({ query: "Harry Poter" });

    if (isError) return <div>Ошибка загрузки</div>;

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