import { FieldError } from 'react-hook-form';
import styles from "@/modules/auth/auth.module.css";

type FormInputProps = {
    label: string;
    error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = ({ label, error, ...props }: FormInputProps) => (
    <div className={styles.inputGroup}>
        <label htmlFor={props.id}>{label}</label>
        <input {...props} />
        {error && <span className={styles.error}>{error.message}</span>}
    </div>
);