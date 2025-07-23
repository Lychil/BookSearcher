import { useState } from 'react';
import styles from '@/modules/auth/auth.module.css';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Создать аккаунт</h2>

            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="confirmPassword">Подтвердите пароль</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className={styles.submitButton}>
                Зарегистрироваться
            </button>
        </form>
    );
}