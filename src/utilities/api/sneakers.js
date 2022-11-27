import {sendRequest} from '../request'
const BASE_URL = '/api/sneakers';

export async function insertSneaker(adminData){
    return sendRequest(BASE_URL,"POST",adminData,"Invalid Input")
}

export function getSneaker() {
    return sendRequest(`${BASE_URL}/sneakers`);
  }