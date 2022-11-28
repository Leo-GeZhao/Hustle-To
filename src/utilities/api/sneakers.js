import {sendRequest} from '../request'
const BASE_URL = '/api/sneakers';

export async function createSneaker(adminData){
    return sendRequest(BASE_URL,"POST",adminData,"Invalid Input")
}

export function getSneakers() {
    return sendRequest(`${BASE_URL}/sneakers`);
  }

export function getSneaker(sneakerName){
    return sendRequest(`${BASE_URL}/sneakers/${sneakerName}`)
}

export function deleteSneaker(sneakerName){
    return sendRequest(`${BASE_URL}/sneakers/${sneakerName}`,"DELETE")
}

export function editSneaker(sneakerName,data) {
    return sendRequest(`${BASE_URL}/sneakers/${sneakerName}`,"PUT",data)
}