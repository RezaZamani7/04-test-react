import React, { Component } from "react";

class Product extends Component {
    state={count:0};
  render() {
    const list = ["item one", "item two", "item three"];
    return (
      <>
        <span className="m-2 text-info">LAPTOP</span>
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
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
  addFunc = () => {
    this.setState({count: this.state.count+1});
  };
  removeFunc() {
    this.setState({count: this.state.count-1})
  }
  delFunc=()=>{
    this.setState({count:0})
  }
}

export default Product;
