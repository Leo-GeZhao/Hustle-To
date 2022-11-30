import {sendRequest} from '../request'
import axios from 'axios'
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
export async function createBanner(formData){
    await axios.post(BANNER_BASE_URL,formData,{
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })
}

export function getBanners() {
    return sendRequest(`${BANNER_BASE_URL}/banners`);
  }

  export function deleteBanner(id){
    console.log(`${BANNER_BASE_URL}/banners/${id}`)
    return sendRequest(`${BANNER_BASE_URL}/banners/${id}`,"DELETE")
}