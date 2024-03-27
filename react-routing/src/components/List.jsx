import styles from "./List.module.css";
import ListItem from "./ListItem";

export default function List({ children }) {
    return (
        <div className={styles.list}>
            <div>
                <h1>Children</h1>
                {children}
            </div>

            <h2>Other components</h2>
            <ListItem text="Item 1" />
            <ListItem text="Item 2" />
            <ListItem text="Item 3" />
        </div>
    );
}
