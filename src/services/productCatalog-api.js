import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

// export async function getAllProducts() {
//   const response = await axios.get(`${baseURL}`);
//   return response.data;
// }

export async function getLimitProducts(limit, skip) {
  const response = await api.get(`/products?limit=${limit}&skip=${skip}`);
  return response.data;
}
