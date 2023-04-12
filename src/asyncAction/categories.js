import axios from "axios";

const URL = `http://localhost:3333/categories`;

const getAllCategories = () => {
  return axios.get(`${URL}/all`);
};

const getSingleCategory = (id) => {
  return axios.get(`${URL}/${id}`);
};

export default { getAllCategories, getSingleCategory };
