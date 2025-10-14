import { useState } from "react";

const Product = ({productName, count:propCount, id, onDelete, onAdd, onRemove}) => {

  return (
    <div>
      <span className="m-2 text-info">{productName}</span>
      <span className="m-2 badge bg-primary">{propCount}</span>
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
  onAdd(id);
}
function removeFunc() {
  onRemove(id);
}
function delFunc() {
  onDelete(id);
}
}
export default Product;
