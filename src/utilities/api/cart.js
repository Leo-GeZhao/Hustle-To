import axios from "axios";

const BASE_URL = "/api/carts";

//Add Product to Cart
export const addToCart = async (data) => {
  return await axios.post(`${BASE_URL}/addCart`, data);
};

//Get Single Cart
export const getCart = async (data) => {
  return await axios.post(`${BASE_URL}/getCart`, data);
};

//Delete Product from Cart
export const deleteItem = async (data) => {
  return await axios.post(`${BASE_URL}/deleteItem`, data);
};

//Change Quantity of a Product
export const changeQty = async (data) => {
  return await axios.post(`${BASE_URL}/changeQty`, data);
};
