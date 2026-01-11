import styles from "./CartProduct.module.css";

export function CartProduct({ title, imageUrl, price }) {
  return (
    <>
      <div className={styles.cartProduct}>
        <img src={imageUrl} alt={title} />
        <div>{title}</div>
        <div>{price}</div>
      </div>
    </>
  );
}
