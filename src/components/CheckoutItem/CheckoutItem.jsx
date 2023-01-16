import React, { useState } from "react";
import "./checkoutItem.css";
import * as cartAPI from "../../utilities/api/cart";

const CheckoutItem = ({ item, user, setUpdate, idx }) => {
  const minusQty = async () => {
    if (item.quantity <= 2) {
      document.getElementById(idx).disabled = true;
      console.log(document.getElementById(idx + 1));
    }
    // console.log(id);
    const data = { user: user._id, id: item._id, quantity: item.quantity - 1 };
    await cartAPI.changeQty(data);
    setUpdate(true);
  };

  const addQty = async () => {
    document.getElementById(idx).disabled = false;
    const data = { user: user._id, id: item._id, quantity: item.quantity + 1 };
    await cartAPI.changeQty(data);
    setUpdate(true);
  };

  const handleDelete = async () => {
    const data = { id: item._id, user: user._id };
    await cartAPI.deleteItem(data);
    setUpdate(true);
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
            id={idx}
            className="btn btn-link"
            style={{ "text-decoration": "none" }}
            onClick={() => minusQty()}
          >
            -
          </button>
          {item.quantity}
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
        <button className="btn btn-outline-dark" onClick={handleDelete}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CheckoutItem;
