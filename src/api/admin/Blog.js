import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const getAllBlogs = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // const accessToken = localStorage.getItem("accessToken");
      // console.log(accessToken);
      // if (!accessToken) {
      //   reject({ error: true, message: "Token not found!" });
      // }
      const res = await axios.get(`${baseUrl}/blog`);
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
      reject(error.response);
    }
  });
};
export const updateBlog = (blogInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }
      const res = await axios.put(`${baseUrl}/blog/${blogInfo.id}`, blogInfo, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("res", res);
      resolve(res.data);
    } catch (error) {
      reject(error.response);
    }
  });
};
export const deleteBlog = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }
      const res = await axios.delete(`${baseUrl}/blog/${id}`, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("res", res);
      resolve(res.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};
