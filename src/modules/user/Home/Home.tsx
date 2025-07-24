import { BooksGrid } from "@/common/components/BooksGrid/BooksGrid";
import { SearchBar } from "@/common/components/SearchBar/SearchBar";
import styles from "@/modules/user/Home/Home.module.css";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <SearchBar />
            <BooksGrid />
        </div>
    )
}
