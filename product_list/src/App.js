import React from "react";
import { styles } from "./styles.js";

const generateProducts = () =>
  Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: `$${(Math.random() * 100 + 10).toFixed(2)}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: `https://picsum.photos/300/200?random=${i + 1}`,
  }));

function ProductCard({ product }) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.content}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div style={styles.price}>{product.price}</div>
        <button style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default function ProductListing() {
  const [products] = React.useState(generateProducts());

  return (
    <div>
      <div style={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
