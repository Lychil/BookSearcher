import { useForm } from 'react-hook-form';
import { authValidations } from '@/common/validations/auth';
import { FormInput } from '@/common/components/FormInput/FormInput';
import { AuthFormData } from '@/common/types/auth';
import styles from '@/modules/auth/auth.module.css';

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<AuthFormData>();

    const onSubmit = async (data: AuthFormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h2>Вход в аккаунт</h2>

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

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? 'Вход...' : 'Войти'}
            </button>
        </form>
    );
}