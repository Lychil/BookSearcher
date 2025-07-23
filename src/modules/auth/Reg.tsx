import { useForm } from 'react-hook-form';
import styles from '@/modules/auth/auth.module.css';

type FormData = {
    email: string;
    password: string;
    confirmPassword: string;
};

export default function SignUp() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    const password = watch('password');

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h2>Создать аккаунт</h2>

            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    {...register('email', {
                        required: 'Email обязателен',
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Некорректный email',
                            
                        },
                    })}
                />
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
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
                            message: 'Пароль должен быть не менее 6 символов',
                        },
                    })}
                />
                {errors.password && <span className={styles.error}>{errors.password.message}</span>}
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="confirmPassword">Подтвердите пароль</label>
                <input
                    type="password"
                    id="confirmPassword"
                    {...register('confirmPassword', {
                        required: 'Подтверждение пароля обязательно',
                        validate: (value) =>
                            value === password || 'Пароли не совпадают',
                    })}
                />
                {errors.confirmPassword && (
                    <span className={styles.error}>{errors.confirmPassword.message}</span>
                )}
            </div>

            <button type="submit" className={styles.submitButton}>
                Зарегистрироваться
            </button>
        </form>
    );
}