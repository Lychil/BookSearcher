import { useState } from 'react';
import styles from '@/common/components/BooksGrid/BooksGrid.module.css';
import { Book } from '@/common/types/books';
import BookCard from '@/common/components/BookCard/BookCard';
import { booksMock } from '@/common/mock/books';

export const BooksGrid = () => {
    const [books, setBooks] = useState<Book[]>(booksMock);

    const [favorites, setFavorites] = useState<string[]>([]);

    const toggleFavorite = (bookId: string) => {
        setFavorites(prev => prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]);
    };

    return (
        <div className={styles.booksGrid}>
            {books.map(book => (
                <BookCard
                    key={book.id}
                    book={book}
                    isFavorite={favorites.includes(book.id)}
                    onToggleFavorite={toggleFavorite}
                />
            ))}
        </div>
    );
};