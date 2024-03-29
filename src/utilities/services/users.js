//User API
import * as usersAPI from "../api/users";

export const getToken = () => {
  const token = window.localStorage.getItem("token");

  if (!token) return null;

  const payload = JSON.parse(window.atob(token.split(".")[1]));

  if (payload.exp < Date.now() / 1000) {
    window.localStorage.removeItem("token");
    return null;
  }

  return token;
};

export const getUser = () => {
  const token = getToken();
  if (!token) return null;
  return JSON.parse(window.atob(token.split(".")[1])).user;
};

// User SignUp
export const signUp = async (formData) => {
  const token = await usersAPI.signUp(formData);
  window.localStorage.setItem("token", JSON.stringify(token));
  return getUser();
};
//User Login
export const login = async (credentials) => {
  const token = await usersAPI.login(credentials);
  localStorage.setItem("token", token.data);
  return getUser();
};

//User Logout
export const logout = () => {
  localStorage.removeItem("token");
};
