import axios from "axios";
import URL from "./url";

const getAllCategories = () => {
  return axios.get(`${URL}/categories/all`);
};

const getSingleCategory = (id) => {
  return axios.get(`${URL}/categories/${id}`);
};

export default { getAllCategories, getSingleCategory };
