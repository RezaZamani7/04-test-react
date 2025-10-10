import React, { Component } from "react";

class Product extends Component {
    count = 0;
  render() {
    // const count = 5;
    const list = ["item one", "item two", "item three"];
    return (
      <>
        <span className="m-2 text-info">product name</span>
        <span className="m-2 badge bg-primary">
          {
            // this.format(count)
             this.count === 0 ? "zero!" : this.count 
          }
        </span>
        <button className="m-2 btn btn-sm btn-success">+</button>
        <button className="m-2 btn btn-sm btn-warning">-</button>
        <button className="m-2 btn btn-sm btn-danger">delete</button>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
//   format(x) {
//     if (x === 0) {
//       return "zero!";
//     } else {
//       return x;
//     }
//     // x === 0 ? "zero!" : x;
//   }
}

export default Product;
