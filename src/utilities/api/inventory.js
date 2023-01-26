import axios from "axios";

const BASE_URL = "/api/inventories";

//Get All New Arrivals
export const getNewArrivals = async () => {
  return await axios.get(`${BASE_URL}/newArrivals`);
};

//Get Inventories Based on Brand
export const getbrand = async (data) => {
  return await axios.post(`${BASE_URL}/brand`, data);
};

//Get All Inventories
export const getAll = async () => {
  return await axios.get(`${BASE_URL}/all`);
};

//Get Signle Inventory Detail
export const getSneaker = async (sneakerName) => {
  return await axios.get(`${BASE_URL}/${sneakerName}`);
};

//Get All Related Inventory in the Same Brand
export const getRelated = async (data) => {
  return await axios.post(`${BASE_URL}/related`, data);
};
