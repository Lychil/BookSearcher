import { useForm } from 'react-hook-form';
import styles from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';
import { SearchFormData } from '@/common/types/filters';
import { filtersValidations } from '@/common/validations/filters';

export const SearchBar = () => {
    const { register, handleSubmit, formState: { isSubmitting }} = useForm<SearchFormData>();

    const onSubmit = (data: SearchFormData) => {};

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.searchForm}>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Поиск..."
                    className={styles.searchInput}
                    {...register('query', filtersValidations.search)}
                />
                <button
                    type="submit"
                    className={styles.searchButton}
                    disabled={isSubmitting}
                >
                    <FiSearch className={styles.searchIcon} />
                </button>
            </div>
        </form>
    );
};