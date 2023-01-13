import axios from "axios";
const BASE_URL = "/api/inventories";

export function getNewArrivals() {
  return axios(`${BASE_URL}/newArrivals`);
}

export function getJordan() {
  return axios(`${BASE_URL}/jordan`);
}
export function getYeezy() {
  return axios(`${BASE_URL}/yeezy`);
}
export function getAll() {
  return axios(`${BASE_URL}/all`);
}
