import styles from "./CartProduct.module.css";

export function CartProduct({
  title,
  imageUrl,
  price,
  quantity,
  onClick,
  onDecrease,
  onIncrease,
}) {
  return (
    <>
      <div className={styles.cartProduct}>
        <img src={imageUrl} alt={title} />
        <div>{title}</div>
        <div>{price}</div>
        <div>
          <button onClick={onDecrease}> - </button> {quantity}{" "}
          <button onClick={onIncrease}> + </button>
        </div>
        <button onClick={onClick}>Remove</button>
      </div>
    </>
  );
}
