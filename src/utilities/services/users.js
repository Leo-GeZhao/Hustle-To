import * as usersAPI from '../api/users'



export function getToken(){
  const token = window.localStorage.getItem('token');
  
  if (!token) return null;
  
  const payload = JSON.parse(window.atob(token.split('.')[1]))

  
  if(payload.exp<Date.now()/1000) {
    window.localStorage.removeItem('token')
    return null;
  }
  
  return token;
}

export function getUser(){
  const token = getToken();
  if(!token) return null
  return JSON.parse(window.atob(token.split('.')[1])).user
}

export async function signUp(formData){
    const token = await usersAPI.signUp(formData)
    //Persist the 'token'
    window.localStorage.setItem('token', JSON.stringify(token));
    return getUser();
}

export function logout(){
  localStorage.removeItem('token');
}

export async function login(credentials) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}

export async function checkToken(){
  const dateStr = await usersAPI.checkToken()
  return new Date(dateStr)
}