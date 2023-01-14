import React, { useState } from "react";
import "./checkoutItem.css";

const CheckoutItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const minusQty = () => {
    if (quantity === 1) {
      document.getElementById("subButton").disabled = true;
    }
    setQuantity(quantity - 1);
  };

  const addQty = () => {
    document.getElementById("subButton").disabled = false;
    setQuantity(quantity + 1);
  };

  return (
    <tr>
      <th scope="row">
        <img src={item.image} alt="" style={{ width: "100px" }} />
      </th>
      <td className="item-list">{item.brand}</td>
      <td className="item-list">{item.name}</td>
      <td className="item-list">{item.size}</td>
      <td className="item-list">${item.price}.00 CAD</td>
      <td className="item-list">
        <div className="border">
          <button
            id="subButton"
            className="btn btn-link"
            style={{ "text-decoration": "none" }}
            onClick={() => minusQty()}
          >
            -
          </button>
          {quantity}
          <button
            className="btn btn-link "
            style={{ "text-decoration": "none" }}
            onClick={() => addQty()}
          >
            +
          </button>
        </div>
      </td>
      <td className="item-list">
        <button className="btn btn-outline-dark">Remove</button>
      </td>
    </tr>
  );
};

export default CheckoutItem;
