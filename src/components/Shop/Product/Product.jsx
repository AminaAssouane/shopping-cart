import { useState } from "react";
import styles from "./Product.module.css";

export function Product({ title, imageUrl, price, onClick }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className={styles.product}>
        <img src={imageUrl} alt={title} />
        <div>{title}</div>
        <div>{price}</div>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={() => onClick(quantity)}>Add to cart</button>
      </div>
    </>
  );
}
