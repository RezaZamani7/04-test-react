import { Component } from "react";
import Product from "./product";
class Products extends Component {
  state = {
    products: [
      { id: 1, count: 2, productName: "laptop" },
      { id: 2, count: 1, productName: "phone" },
      { id: 3, count: 4, productName: "airpod" },
    ],
  };
  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.reset}>
          Reset
        </button>
        {this.state.products.map((p, index) => (
          <Product
            key={index}
            id={p.id}
            productName={p.productName}
            count={p.count}
            onAdd={this.handleAdd}
            onRemove={this.handleRemove}
            onDelete={this.handleDelete}
          />
        ))}
      </>
    );
  }

  //   methods
  handleDelete = (id) => {
    const newProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: newProducts });
  };

  handleAdd = (id) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === id);
    newProducts[index].count += 1;
    this.setState({ products: newProducts });
  };

  handleRemove = (id) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === id);
    newProducts[index].count -= 1;
    this.setState({ products: newProducts });
  };

    reset = () => {
    const newProducts = this.state.products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products: newProducts });
  };
}

export default Products;
