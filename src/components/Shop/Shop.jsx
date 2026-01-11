import { Product } from "./Product/Product";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Shop.module.css";

export function Shop() {
  const [products, setProducts] = useState([]);

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

  return (
    <>
      <div className={styles.layout}>
        {products.map((product) => (
          <Product
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}
