import axios from "axios";
const BASE_URL = "/api/carts";

export function addToCart(data) {
  return axios.post(`${BASE_URL}/addCart`, data);
}

export function getCart(data) {
  return axios.post(`${BASE_URL}/getCart`, data);
}

export function deleteItem(data) {
  return axios.post(`${BASE_URL}/deleteItem`, data);
}

export function changeQty(data) {
  return axios.post(`${BASE_URL}/changeQty`, data);
}
