import {sendRequest} from '../request'
const SNEAKER_BASE_URL = '/api/sneakers';
const BANNER_BASE_URL = '/api/banners'

//sneaker
export async function createSneaker(data){
    return sendRequest(SNEAKER_BASE_URL,"POST",data,"Invalid Input")
}

export function getSneakers() {
    return sendRequest(`${SNEAKER_BASE_URL}/sneakers`);
  }

export function getSneaker(sneakerName){
    return sendRequest(`${SNEAKER_BASE_URL}/sneakers/${sneakerName}`)
}

export function deleteSneaker(sneakerName){
    return sendRequest(`${SNEAKER_BASE_URL}/sneakers/${sneakerName}`,"DELETE")
}

export function editSneaker(sneakerName,data) {
    return sendRequest(`${SNEAKER_BASE_URL}/sneakers/${sneakerName}`,"PUT",data)
}

//banner
export async function createBanner(data){
    return sendRequest(BANNER_BASE_URL,"POST",data,"Invalid Input")
}
