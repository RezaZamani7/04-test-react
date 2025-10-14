import { Component } from "react";
import Product from "./product";
class Products extends Component {
 
  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.products.map((p, index) => (
          <Product
            key={index}
            id={p.id}
            productName={p.productName}
            count={p.count}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            onDelete={this.props.onDelete}
          />
        ))}
      </>
    );
  }

  
}

export default Products;
