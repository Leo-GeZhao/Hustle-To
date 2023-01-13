import axios from "axios";
const BASE_URL = "/api/inventories";

export function getNewArrivals() {
  return axios.get(`${BASE_URL}/newArrivals`);
}

export function getJordan() {
  return axios.get(`${BASE_URL}/jordan`);
}

export function getYeezy() {
  return axios.get(`${BASE_URL}/yeezy`);
}

export function getAll() {
  return axios.get(`${BASE_URL}/all`);
}

export function getSneaker(sneakerName) {
  return axios.get(`${BASE_URL}/${sneakerName}`);
}

export function getRelated(data) {
  return axios.post(`${BASE_URL}/related`, data);
}
