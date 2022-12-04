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

export const userLogout = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }

      const { data } = await axios.post(`${baseUrl}/auth/logout`, accessToken, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("data", data);
      resolve(data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};



export const checkEmailExist = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${baseUrl}/auth/checkEmail/${email}`);
      if (data.status === true) {
        console.log(data);
        resolve(data);
      }
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export const resetPassword = (userInfor) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(`${baseUrl}/auth/resetpw`, userInfor);
      console.log("data", data);
      resolve(data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};