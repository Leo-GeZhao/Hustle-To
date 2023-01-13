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
  return sendRequest(`${SNEAKER_BASE_URL}/sneakers/${sneakerName}`);
}

export function deleteSneaker(sneakerName) {
  return sendRequest(`${SNEAKER_BASE_URL}/sneakers/${sneakerName}`, "DELETE");
}

export function editSneaker(sneakerName, data) {
  return sendRequest(
    `${SNEAKER_BASE_URL}/sneakers/${sneakerName}`,
    "PUT",
    data
  );
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
