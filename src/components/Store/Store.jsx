import { useEffect, useState } from "react";
import { Shop } from "../Shop/Shop";
import { Cart } from "../Cart/Cart";
import { useLocation, useOutletContext } from "react-router";
import { addToCartLogic, deleteFromCartLogic } from "../../tests/cartUtils.js";

export function Store() {
  const [products, setProducts] = useState([]);
  const { cartProducts, setCartProducts } = useOutletContext();

  useEffect(() => {
    async function fetchProducts() {
      const ids = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ];
      const promises = ids.map((id) =>
        fetch(`https://fakestoreapi.com/products/${id}`).then((response) =>
          response.json(),
        ),
      );
      const results = await Promise.all(promises);
      const products = results.map((product) => ({
        id: product.id,
        title: product.title,
        imageUrl: product.image,
        price: product.price,
      }));

      setProducts(products);
    }

    fetchProducts();
  }, []);

  
function addToCart(product, quantity, id) {
  setCartProducts(addToCartLogic(cartProducts, product, quantity, id));
}

function deleteFromCart(id) {
  setCartProducts(deleteFromCartLogic(cartProducts, id));
}

  function onDecrease(id) {
    setCartProducts(
      cartProducts.map((p) =>
        p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p,
      ),
    );
  }

  function onIncrease(id) {
    setCartProducts(
      cartProducts.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p,
      ),
    );
  }

  const location = useLocation();

  return (
    <>
      {location.pathname === "/Shop" && (
        <Shop products={products} onClick={addToCart} />
      )}

      {location.pathname === "/Cart" && (
        <Cart
          cartProducts={cartProducts}
          onClick={deleteFromCart}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      )}
    </>
  );
}
