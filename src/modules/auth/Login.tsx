import { useForm } from 'react-hook-form';
import styles from '@/modules/auth/auth.module.css';

type FormData = {
    email: string;
    password: string;
};

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h2>Вход в аккаунт</h2>

            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    {...register('email', {
                        required: 'Email обязателен',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Введите корректный email',
                        },
                    })}
                />
                {errors.email && (
                    <span className={styles.error}>{errors.email.message}</span>
                )}
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    id="password"
                    {...register('password', {
                        required: 'Пароль обязателен',
                        minLength: {
                            value: 6,
                            message: 'Пароль должен содержать минимум 6 символов',
                        },
                    })}
                />
                {errors.password && (
                    <span className={styles.error}>{errors.password.message}</span>
                )}
            </div>

            <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Вход...' : 'Войти'}
            </button>
        </form>
    );
}