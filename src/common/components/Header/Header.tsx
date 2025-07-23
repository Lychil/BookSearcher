import styles from "@/common/components/Header/Header.module.css";
import shared from "@/common/styles/shared.module.css";
import Logo from "@/common/components/Logo/Logo";

export default function Header() {
    return (
        <header>
            <div className={`${styles.inner} ${shared.container}`}>
                <Logo />
            </div>
        </header>
    )
}
