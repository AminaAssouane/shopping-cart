import { CartProduct } from "./CartProduct/CartProduct";
import styles from "./Cart.module.css";

export function Cart({ cartProducts = [], onClick }) {
  return (
    <>
      <div>Your cart</div>
      <div>
        {cartProducts.map((cartProduct) => (
          <CartProduct
            key={cartProduct.id}
            title={cartProduct.title}
            imageUrl={cartProduct.imageUrl}
            price={cartProduct.price}
            onClick={() => onClick(cartProduct.id)}
          />
        ))}
      </div>
    </>
  );
}
