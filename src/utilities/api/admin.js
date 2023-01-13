import { sendRequest } from "../request";
import axios from "axios";
const SNEAKER_BASE_URL = "/api/sneakers";
const BANNER_BASE_URL = "/api/banners";

//sneaker
export async function createSneaker(formData) {
  await axios.post(SNEAKER_BASE_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function getSneakers() {
  return sendRequest(`${SNEAKER_BASE_URL}/sneakers`);
}

export function getSneaker(sneakerName) {
  return axios.get(`${SNEAKER_BASE_URL}/sneakers/${sneakerName}`);
}

export function deleteSneaker(sneakerName) {
  return axios.delete(`${SNEAKER_BASE_URL}/sneakers/${sneakerName}`);
}

export function editSneaker(sneakerName, data) {
  return axios.put(`${SNEAKER_BASE_URL}/sneakers/${sneakerName}`, data);
}

export function addVariant(sneakerName, data) {
  return sendRequest(
    `${SNEAKER_BASE_URL}/sneakers/${sneakerName}/variant`,
    "POST",
    data
  );
}

//banner
export async function createBanner(formData) {
  await axios.post(BANNER_BASE_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function getBanners() {
  return axios.get(`${BANNER_BASE_URL}/banners`);
}

export function deleteBanner(data) {
  return axios.delete(`${BANNER_BASE_URL}/banners/${data.id}`);
}
