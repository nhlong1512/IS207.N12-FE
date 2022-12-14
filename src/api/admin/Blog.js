import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const getAllBlogs = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }
      const res = await axios.get(`${baseUrl}/blog`, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("res", res);
      resolve(res.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export const createBlog = (blogInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }
      const res = await axios.post(`${baseUrl}/blog`, blogInfo, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("res", res);
      resolve(res.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};
