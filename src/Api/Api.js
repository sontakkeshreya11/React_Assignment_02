import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

export const getAllProducts = async () => {
  return await api.get("/products");
};

export const getProductapi = async (id) => {
  return await api.get(`products/${parseInt(id)}`);
};

export const addProduct = async (product) => {
  return await api.post("/products", product);
};

export const getCategoriesapi = async () => {
  return await api.get("/products/categories");
};

export const getCategory = async (category_name) => {
  return await api.get(`/products/category/${category_name}`);
};

export const deleteProduct = async (id) => {
  return await api.delete(`/products/${parseInt(id)}`);
};

export const editProduct = async (id, product) => {
  return await api.put(`/products/${id}`, product);
};

export const limitProduct = async (limit) => {
  return await api.get(`/products?limit=${parseInt(limit)}`);
};

export const getUserCart = async () => {
  return await api.get("/carts/user/1");
};
