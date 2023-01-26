import React, { useEffect, useState } from "react";

//Checkout API
import * as checkoutAPI from "../../../utilities/api/checkout";

const OrderHistory = ({ user }) => {
  const [orders, setOrders] = useState([]);

  //Get Order History
  useEffect(function () {
    const getOrders = async () => {
      const data = { user: user._id };
      const orders = await checkoutAPI.getOrders(data);
      setOrders(orders.data);
    };
    getOrders();
  }, []);

  return (
    <div>
      <div>
        <h5>OrderHistory</h5>
      </div>
      {!!orders.length && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Brand</th>
              <th scope="col">Name</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          {orders &&
            orders.map((o) => (
              <>
                <div className=" mt-4 ms-3 " style={{ width: "100%" }}>
                  Order Placed: {o.updatedAt.substring(0, 10)}
                </div>
                {o.orderDetail.map((d) => (
                  <>
                    <tbody>
                      <th scope="row">
                        <img src={d.image} alt="" style={{ width: "100px" }} />
                      </th>

                      <td className="item-list">
                        <div>{d.brand}</div>
                      </td>
                      <td className="item-list">
                        <div>{d.name}</div>
                      </td>
                      <td className="item-list">
                        <div>{d.size}</div>
                      </td>
                      <td className="item-list">
                        <div>${d.price}.00 CAD</div>
                      </td>
                    </tbody>
                  </>
                ))}
              </>
            ))}
        </table>
      )}
    </div>
  );
};

export default OrderHistory;
