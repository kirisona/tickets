import axios from "axios";
import config from "../config/api.config";

const baseUrl = config.url;

async function getCountries() {
  try {
    const response = await axios.get(`${baseUrl}/countries`);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject();
  }
}

async function getCities() {
  try {
    const response = await axios.get(`${baseUrl}/cities`);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject();
  }
}

async function getAirlines() {
  try {
    const response = await axios.get(`${baseUrl}/airlines`);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject();
  }
}

export default { getCountries, getCities, getAirlines };
