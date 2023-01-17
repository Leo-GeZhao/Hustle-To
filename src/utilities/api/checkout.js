import axios from "axios";
const BASE_URL = "/api/checkouts";

export function checkout(data) {
  return axios.post(`${BASE_URL}/create-checkout-session`, data);
}

export function getOrders(data) {
  return axios.post(`${BASE_URL}/orders`, data);
}
