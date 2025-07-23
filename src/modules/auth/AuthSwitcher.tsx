import { useState } from 'react';
import styles from '@/modules/auth/auth.module.css';
import Login from '@/modules/auth/Login';
import Reg from '@/modules/auth/Reg';

export default function AuthSwitcher() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={styles.wrapper}>
            <div className={styles.authContainer}>
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${isLogin ? styles.active : ''}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Вход
                    </button>
                    <button
                        className={`${styles.tab} ${!isLogin ? styles.active : ''}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Регистрация
                    </button>
                </div>

                {isLogin ? <Login /> : <Reg />}
            </div>
        </div>
    );
}