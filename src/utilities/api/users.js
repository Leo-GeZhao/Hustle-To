import {sendRequest} from '../request'
const BASE_URL = '/api/users';
const DEFAULT_HEADERS = { 'Content-Type': 'application/json' }

export async function signUp(userData){
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    // const options = {
    //     method:'POST',
    //     headers: DEFAULT_HEADERS,
    //     body: JSON.stringify(userData) // shows up as payload in browser netwok tab
    // }

    // const res = await fetch(BASE_URL, options);

    //  // Check if request was successful
    // if(res.ok){
    //     return res.json() // converts json to JS obj
    // }else{
    //     throw new Error('Invalid Sign Up')
    // }
    return sendRequest(BASE_URL,"POST",userData,"Invalid Sign Up")
}

export async function login(credentials) {
    // Fetch uses an options object as a second arg to make
    // requests other than GET and/or send data and/or set headers
    // const res = await fetch(`${BASE_URL}/login`, {
    //   method: 'POST',
    //   // MIME type of application/json
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(credentials)
    // });
    // // Check if request succeeded
    // if (res.ok) {
    //   // Promise will resolve to the JWT
    //   return res.json();
    // } else {
    //   throw new Error('Invalid Log In');
    // }
    return sendRequest(`${BASE_URL}/login`, "POST", credentials, "Invalid Credentials")
  }

  export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}