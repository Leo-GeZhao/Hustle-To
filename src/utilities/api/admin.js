import axios from "axios";

const SNEAKER_BASE_URL = "/api/sneakers";
const BANNER_BASE_URL = "/api/banners";

//Create a Sneaker
export const createSneaker = async (formData) => {
  await axios.post(SNEAKER_BASE_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//Get All Sneakers
export const getSneakers = async () => {
  return await axios.get(`${SNEAKER_BASE_URL}/sneakers`);
};

//Get a Single Sneaker based on the Sneaker Name
export const getSneaker = async (sneakerName) => {
  return await axios.get(`${SNEAKER_BASE_URL}/sneakers/${sneakerName}`);
};

//Delete a Single Sneaker based on the Sneaker Name
export const deleteSneaker = async (sneakerName) => {
  return await axios.delete(`${SNEAKER_BASE_URL}/sneakers/${sneakerName}`);
};

//Edit a Single Sneaker Detail based on Sneaker Name
export const editSneaker = async (sneakerName, data) => {
  return await axios.put(`${SNEAKER_BASE_URL}/sneakers/${sneakerName}`, data);
};

//Add Variant (Size&Price) to a Single Sneaker
export const addVariant = async (sneakerName, data) => {
  return await axios.post(
    `${SNEAKER_BASE_URL}/sneakers/${sneakerName}/variant`,
    data
  );
};

//Create a Banner
export const createBanner = async (formData) => {
  await await axios.post(BANNER_BASE_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//Get All Banners
export const getBanners = async () => {
  return await axios.get(`${BANNER_BASE_URL}/banners`);
};

//Delete a Banner
export const deleteBanner = async (data) => {
  return await axios.delete(`${BANNER_BASE_URL}/banners/${data.id}`);
};
