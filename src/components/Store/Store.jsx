import { useEffect, useState } from "react";
import { Shop } from "../Shop/Shop";
import { Cart } from "../Cart/Cart";

export function Store() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const ids = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ];
      const promises = ids.map((id) =>
        fetch(`https://fakestoreapi.com/products/${id}`).then((response) =>
          response.json()
        )
      );
      const results = await Promise.all(promises);
      const products = results.map((product) => ({
        title: product.title,
        imageUrl: product.image,
        price: product.price,
      }));

      setProducts(products);
    }

    fetchProducts();
  }, []);

  function addToCart(product) {
    setCartProducts(cartProducts.push(product));
  }

  return (
    <>
      <Shop products={products} />
    </>
  );
}
