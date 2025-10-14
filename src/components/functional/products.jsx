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
    <button onClick={reset} className="btn btn-primary">Reset</button>
      {products.map((p, index) => (
        <Product
          key={index}
          onDelete={handleDelete}
          id={p.id}
          count={p.count}
          productName={p.productName}
          onAdd={handleAdd}
          onRemove={handleRemove}
        />
      ))}
    </>
  );

  function handleDelete(id) {
    const newProducts = products.filter((p) => p.id !== id);
    setProducts(newProducts);
  }

  function handleAdd(id) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === id);
    newProducts[index].count += 1;
    setProducts(newProducts);
  }

  function handleRemove(id) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === id);
    newProducts[index].count -= 1;
    setProducts(newProducts);
  }

  function reset() {
    const newProducts = products.map((p) => {
      p.count = 0;
      return p;
    });
    setProducts(newProducts);
  }
};

export default Products;
