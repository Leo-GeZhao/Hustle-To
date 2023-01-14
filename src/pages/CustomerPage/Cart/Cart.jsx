import React, { useEffect, useState } from "react";
import * as cartAPI from "../../../utilities/api/cart";
import CheckoutItem from "../../../components/CheckoutItem/CheckoutItem";

const Cart = ({ user }) => {
  const [cart, setCart] = useState(null);
  useEffect(function () {
    async function getCart() {
      const data = { user: user._id };
      console.log(data);
      const cart = await cartAPI.getCart(data);
      setCart(cart.data);
    }
    getCart();
  }, []);

  console.log(cart);
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
            {cart && cart.orderDetail.map((c) => <CheckoutItem item={c} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
