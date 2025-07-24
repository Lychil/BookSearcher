import styles from "@/common/components/BookCard/BookCard.module.css";
import { FiHeart } from "react-icons/fi"
import { Book } from "@/common/types/books";

export default function BookCard({ book, isFavorite, onToggleFavorite }: { book: Book; isFavorite: boolean; onToggleFavorite: (id: string) => void; }) {
    return (
        <div className={styles.bookCard}>
            <div className={styles.bookImageContainer}>
                <img src={book.coverImage} alt={book.title} className={styles.bookImage} />
                <button
                    className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''}`}
                    onClick={() => onToggleFavorite(book.id)}
                    aria-label={isFavorite ? 'Не добавлено в избранное' : 'Добавлено в избранное'}
                >
                    <FiHeart size={20} />
                </button>
            </div>

            <div className={styles.bookInfo}>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookAuthor}>{book.author}</p>
                <p className={styles.bookDescription}>{book.description}</p>

                <div className={styles.bookMeta}>
                    <span className={styles.bookRating}>★ {book.rating}</span>
                </div>
            </div>
        </div>
    );
};