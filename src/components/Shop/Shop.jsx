import { Product } from "./Product/Product";
import styles from "./Shop.module.css";

export function Shop({ products }) {
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
