import axios from "axios";
const BASE_URL = "/api/inventories";

export function getNewArrivals() {
  return axios(`${BASE_URL}/newArrivals`);
}
