import { CartProduct } from "./CartProduct/CartProduct";

export function Cart({ cartProducts = [], onClick }) {
  return (
    <>
      <div>Your cart</div>
      <div>
        Your total price :
        {cartProducts.reduce(
          (total, product) => total + product.price * product.quantity,
          0,
        )}
      </div>
      <div>
        {cartProducts.map((cartProduct) => (
          <CartProduct
            key={cartProduct.id}
            title={cartProduct.title}
            imageUrl={cartProduct.imageUrl}
            price={cartProduct.price}
            quantity={cartProduct.quantity}
            onClick={() => onClick(cartProduct.id)}
          />
        ))}
      </div>
    </>
  );
}
