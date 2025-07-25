import styles from "@/common/components/BookCard/BookCard.module.css";
import { FiHeart } from "react-icons/fi"
import { BookCardData } from "@/common/types/books";

interface BookCardProps {
    book: BookCardData;
}

export default function BookCard({ book }: BookCardProps) {
    const {thumbnail, ratingCount, description, title, authors} = book;

    return (
        <div className={styles.bookCard}>
            <div className={styles.bookImageContainer}>
                <img src={thumbnail} alt={title} className={styles.bookImage} />
                <button
                    className={styles.favoriteButton}
                    onClick={() => {}}
                    aria-label={'Не добавлено в избранное'}
                >
                    <FiHeart size={20} />
                </button>
            </div>

            <div className={styles.bookInfo}>
                <h3 className={styles.bookTitle}>{title}</h3>
                <p className={styles.bookAuthor}>{authors.join(" ")}</p>
                <p className={styles.bookDescription}>{description}</p>

                <div className={styles.bookMeta}>
                    <span className={styles.bookRating}>★ {ratingCount}</span>
                </div>
            </div>
        </div>
    );
};