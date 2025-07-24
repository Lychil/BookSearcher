import { Link } from "react-router-dom";
import styles from "@/common/components/Logo/Logo.module.css";

export default function Logo() {
    return (
        <Link className={styles.logo} to="/home">
            BookSearcher
        </Link>
    )
}
