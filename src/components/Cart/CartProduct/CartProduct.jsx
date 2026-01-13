import styles from "./CartProduct.module.css";

export function CartProduct({ title, imageUrl, price, onClick }) {
  return (
    <>
      <div className={styles.cartProduct}>
        <img src={imageUrl} alt={title} />
        <div>{title}</div>
        <div>{price}</div>
        <button onClick={onClick}>Remove</button>
      </div>
    </>
  );
}
