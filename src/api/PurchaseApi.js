import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const PurchaseApi = (dataForm) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }
      console.log(dataForm);
      const res = await axios.post(`${baseUrl}/thanhtoan`, dataForm, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("res", res);
      resolve(res);
    } catch (error) {
      reject(error.response.data);
    }
  });
};
