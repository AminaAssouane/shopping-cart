import styles from "./Product.module.css";

export function Product({ title, imageUrl, price }) {
  return (
    <>
      <div className={styles.product}>
        <img src={imageUrl} alt={title} />
        <div>{title}</div>
        <div>{price}</div>
      </div>
    </>
  );
}
