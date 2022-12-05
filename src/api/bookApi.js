import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const getAllProducts = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${baseUrl}/sanpham/?page=${id || 1}`);
      console.log(data);

      resolve(data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};
