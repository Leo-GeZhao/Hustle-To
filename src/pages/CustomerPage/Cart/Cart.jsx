import React, { useEffect, useState } from "react";
import * as cartAPI from "../../../utilities/api/cart";
import CheckoutItem from "../../../components/CheckoutItem/CheckoutItem";

const Cart = ({ user, setUpdate, update }) => {
  const [cart, setCart] = useState(null);
  useEffect(
    function () {
      async function getCart() {
        const data = { user: user._id };
        const cart = await cartAPI.getCart(data);
        setCart(cart.data);
      }
      getCart();
      setUpdate(true);
    },
    [update]
  );

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
      </div>
    </div>
  );
};

export default Cart;
