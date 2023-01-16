import React, { useEffect, useState } from "react";
import axios from "axios";

import CheckoutItem from "../../../components/CheckoutItem/CheckoutItem";

const Cart = ({ user, setUpdate, update, cart }) => {
  const handleCheckout = async () => {
    const data = { orderDetail: cart.orderDetail };
    const checkout = await axios.post(
      "api/checkouts/create-checkout-session",
      data
    );
    const url = checkout.data.url;
    window.location = url;
  };
  return (
    <div>
      <div className="text-center mt-3">
        <h5>CART</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Brand</th>
              <th scope="col">Name</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="cart-body">
            {cart &&
              cart.orderDetail.map((c, idx) => (
                <CheckoutItem
                  item={c}
                  user={user}
                  setUpdate={setUpdate}
                  idx={idx + 1}
                />
              ))}
          </tbody>
        </table>
        <button className="btn btn-outline-dark" onClick={handleCheckout}>
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
