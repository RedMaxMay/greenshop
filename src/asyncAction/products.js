import axios from "axios";

const URL = `http://localhost:3333/products`;

const getAllProducts = () => {
  return axios.get(`${URL}/all`);
};

const getSingleProduct = (id) => {
  return axios.get(`${URL}/${id}`);
};

export default { getAllProducts, getSingleProduct };
