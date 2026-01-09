import styles from "./Nav.module.css";

export function Nav() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Amina's Store</h1>
      <nav className={styles.nav}>
        <button className={styles.button}>Home</button>
        <button className={styles.button}>Shop</button>
        <button className={styles.button}>Cart</button>
      </nav>
    </header>
  );
}
