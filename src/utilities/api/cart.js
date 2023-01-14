import axios from "axios";
const BASE_URL = "/api/carts";

export function addToCart(data) {
  return axios.post(`${BASE_URL}/addCart`, data);
}
