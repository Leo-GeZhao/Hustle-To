import {sendRequest} from '../request'
const BASE_URL = '/api/users';

export async function signUp(userData){
    return sendRequest(BASE_URL,"POST",userData,"Invalid Sign Up")
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, "POST", credentials, "Invalid Credentials")
  }

