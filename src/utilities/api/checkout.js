import axios from "axios";

const BASE_URL = "/api/checkouts";

//Stripe Checkout
export const checkout = async (data) => {
  return await axios.post(`${BASE_URL}/create-checkout-session`, data);
};

//Get Order History
export const getOrders = async (data) => {
  return await axios.post(`${BASE_URL}/orders`, data);
};
