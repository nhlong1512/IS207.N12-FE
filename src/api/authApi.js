import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const userLogin = (userInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(`${baseUrl}/auth/login`, userInfo);
      if (data.status === true) {
        resolve(data);
      }
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export const userRegister = (userInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("api");
      console.log(userInfo);
      const { data } = await axios.post(`${baseUrl}/auth/register`, userInfo);
      console.log(data);
      if (data.status === true) {
        console.log("api1");
        resolve(data);
      }
    } catch (error) {
      reject(error.response.data);
    }
  });
};
