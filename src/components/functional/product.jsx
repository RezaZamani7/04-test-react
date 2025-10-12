import { useState } from "react";

const Product = (props) => {
    const [count, setCount] = useState(0);

  return (
    <div>
      <span className="m-2 text-info">{props.productName}</span>
      <span className="m-2 badge bg-primary">{count}</span>
      <button onClick={addFunc} className="m-2 btn btn-sm btn-success">
        +
      </button>
      <button onClick={removeFunc} className="m-2 btn btn-sm btn-warning">
        -
      </button>
      <button onClick={delFunc} className="m-2 btn btn-sm btn-danger">
        delete
      </button>
    </div>
  );

function addFunc() {
  setCount(count + 1);
}
function removeFunc() {
  setCount(count - 1);
}
function delFunc() {
  setCount(0);
}
}
export default Product;
