import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const getAllBillUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }
      const res = await axios.get(`${baseUrl}/donhang/${id}`, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("res", res);
      resolve(res);
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export const cancelBillUser = (id, orderInfor) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }
      const res = await axios.put(`${baseUrl}/donhangcancel/${id}`, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("res", res);
      resolve(res);
    } catch (error) {
      reject(error.response.data);
    }
  });
};
export const doneBillUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }
      const res = await axios.put(`${baseUrl}/donhangdone/${id}`, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("res", res);
      resolve(res);
    } catch (error) {
      reject(error.response.data);
    }
  });
};




// Lấy chi tiết hóa đơn

export const getAllCTHDUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }
      const res = await axios.get(`${baseUrl}/hoadon/${id}`, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("res", res);
      resolve(res.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};
