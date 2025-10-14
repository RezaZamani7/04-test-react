import Product from "./product";
import { useState } from "react";
const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, count: 2, productName: "laptop" },
    { id: 2, count: 1, productName: "phone" },
    { id: 3, count: 4, productName: "airpod" },
  ]);
  return (
    <>
      {products.map((p, index) => (
        <Product
          key={index}
          onDelete={handleDelete}
          id={p.id}
          count={p.count}
          productName={p.productName}
        />
      ))}
    </>
  );

  function handleDelete(id) {
    const newProducts = products.filter((p) => p.id !== id);
    setProducts(newProducts);
  }
};

export default Products;
