import styles from '@/common/skeletons/BookCardSkeleton.module.css';

export const BookCardSkeleton = () => {
    return (
        <div className={styles.skeletonCard}>
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonContent}>
                <div className={`${styles.skeletonLine} ${styles.title}`} />
                <div className={`${styles.skeletonLine} ${styles.author}`} />
                <div className={`${styles.skeletonLine} ${styles.description}`} />
                <div className={`${styles.skeletonLine} ${styles.rating}`} />
            </div>
        </div>
    );
};