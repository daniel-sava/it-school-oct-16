import { Link } from "react-router-dom";
import styles from "./NavbarAuth.module.css";

export default function NavbarAuth() {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.logo}>AUTH</h1>
            <Link to="/">Home</Link>
        </div>
    );
}
