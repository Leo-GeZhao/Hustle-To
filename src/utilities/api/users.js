import axios from "axios";

const BASE_URL = "/api/users";

//User SignUp
export const signUp = async (data) => {
  return await axios.post(BASE_URL, data);
};

//User Login
export const login = async (credentials) => {
  return await axios.post(`${BASE_URL}/login`, credentials);
};
