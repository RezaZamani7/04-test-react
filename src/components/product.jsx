import React, { Component } from "react";

class Product extends Component {
    
  render() {
const {productName}=this.props;
    return (
      <div>
        <span className="m-2 text-info">{productName}</span>
        <span className="m-2 badge bg-primary">
          {this.props.count}
        </span>
        <button onClick={this.addFunc} className="m-2 btn btn-sm btn-success">
          +
        </button>
        <button
          onClick={this.removeFunc.bind(this)}
          className="m-2 btn btn-sm btn-warning"
        >
          -
        </button>
        <button onClick={this.delFunc} className="m-2 btn btn-sm btn-danger">delete</button>
      </div>
    );
  }

  // methods
  addFunc = () => {
    this.props.onAdd(this.props.id)
  };

  removeFunc() {
    this.props.onRemove(this.props.id)
  }
  
  delFunc=()=>{
    this.props.onDelete(this.props.id)
  }
}

export default Product;
