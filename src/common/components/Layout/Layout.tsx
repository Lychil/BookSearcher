import { Outlet } from 'react-router-dom';
import Header from '@/common/components/Header/Header';
import shared from "@/common/styles/shared.module.css";
import styles from "@/common/components/Layout/Layout.module.css";

export default function Layout() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={`${shared.container} ${styles.main}`}>
                <Outlet />
            </main>
            <footer />
        </div>
    )
}
