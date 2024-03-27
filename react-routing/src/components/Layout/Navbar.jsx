import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.logo}>LOGO</h1>
            <div className={styles.links}>
                <Link className={styles.link} to="/terms-and-conditions">
                    Terms and Conditions
                </Link>
                <Link className={styles.link} to="/auth/login">
                    Login
                </Link>
            </div>
        </div>
    );
}
