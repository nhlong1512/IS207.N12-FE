import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const createProduct = (productInfor) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }
      const res = await axios.post(`${baseUrl}/sanpham`, productInfor, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("res", res);
      resolve(res.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export const getDetailProductApi = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${baseUrl}/sanpham/${id}`);
      console.log(data);

      resolve(data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export const updateProduct = (productInfo, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const res = await axios.put(`${baseUrl}/sanpham/${id}`, productInfo, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("data", res.data);
      resolve(res);
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export const deleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const res = await axios.delete(`${baseUrl}/sanpham/${id}`, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("data", res.data);
      resolve(res);
    } catch (error) {
      reject(error.response.data);
    }
  });
};