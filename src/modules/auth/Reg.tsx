import { useForm } from 'react-hook-form';
import { FormInput } from '@/common/components/FormInput/FormInput';
import { authValidations } from '@/common/validations/auth';
import { RegFormData } from '@/common/types/auth';
import styles from '@/modules/auth/auth.module.css';

export default function SignUp() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<RegFormData>();

    const password = watch('password');

    const onSubmit = (data: RegFormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h2>Создать аккаунт</h2>

            <FormInput
                id="email"
                type="email"
                label="Email"
                error={errors.email}
                {...register('email', authValidations.email)}
            />

            <FormInput
                id="password"
                type="password"
                label="Пароль"
                error={errors.password}
                {...register('password', authValidations.password)}
            />

            <FormInput
                id="confirmPassword"
                type="password"
                label="Подтвердите пароль"
                error={errors.confirmPassword}
                {...register('confirmPassword', authValidations.confirmPassword(password))}
            />

            <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
            </button>
        </form>
    );
}