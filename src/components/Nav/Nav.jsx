import styles from "./Nav.module.css";
import { Link } from "react-router";

export function Nav() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Amina's Store</h1>
      <nav className={styles.nav}>
        <Link to="/" className={styles.button}>
          Home
        </Link>
        <Link to="Shop" className={styles.button}>
          Shop
        </Link>
        <Link to="Cart" className={styles.button}>
          Cart
        </Link>
      </nav>
    </header>
  );
}
