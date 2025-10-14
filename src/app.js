import React, { Component } from "react";
import Navbar from "./components/navbar";
import Products from "./components/products";
class App extends Component {
  state = {
      products: [
        { id: 1, count: 2, productName: "laptop" },
        { id: 2, count: 1, productName: "phone" },
        { id: 3, count: 4, productName: "airpod" },
      ],
    };
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
    render() {
    
    return (
      <>
        <Navbar products={this.state.products} />
        <Products
          products={this.state.products}
          onAdd={this.handleAdd}
          onRemove={this.handleRemove}
          onDelete={this.handleDelete}
          onReset={this.reset}
        />
      </>
    );
  }
}

export default App;
