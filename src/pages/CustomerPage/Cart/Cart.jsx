import React from "react";

//Components
import CheckoutItem from "../../../components/CheckoutItem/CheckoutItem";

//Checkout API
import * as checkoutAPI from "../../../utilities/api/checkout";

const Cart = ({ user, setUpdate, cart }) => {
  //Handle Checkout Cart
  const handleCheckout = async () => {
    const data = { cart: cart };
    const checkout = await checkoutAPI.checkout(data);

    //Open Stripe Checout Page
    const url = checkout.data.url;
    window.location = url;
  };
  return (
    <div>
      <div className="text-center mt-3">
        <h5>CART</h5>
        {cart && (
          <>
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
            <div className="d-flex justify-content-end me-2">
              {cart && (
                <p>
                  Total: $
                  {cart.orderDetail
                    .map((c) => Number(c.price))
                    .reduce((a, b) => a + b, 0)}
                  .00 CAD
                </p>
              )}
            </div>
            <button className="btn btn-outline-dark" onClick={handleCheckout}>
              Check Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
