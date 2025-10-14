import React, { Component } from "react";

class Product extends Component {
    state={
      count:this.props.count
    };
  render() {
const {productName}=this.props;
    return (
      <div>
        <span className="m-2 text-info">{productName}</span>
        <span className="m-2 badge bg-primary">
          {this.state.count}
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
  addFunc = () => {
    this.setState({count: this.state.count+1});
  };
  removeFunc() {
    this.setState({count: this.state.count-1})
  }
  delFunc=()=>{
    this.props.onDelete(this.props.id)
  }
}

export default Product;
