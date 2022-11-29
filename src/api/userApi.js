import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const  fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }

      const { data } = await axios.get(`${baseUrl}/user`, {
        headers: {'Authorization': 'Bearer '+accessToken}
      });
console.log("data",data);
      resolve(data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export const updateUser = (userInfor, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      if (!accessToken) {
        reject({ error: true, message: "Token not found!" });
      }

      const { data } = await axios.put(`${baseUrl}/user/${id}`, userInfor, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      console.log("data", data);
      resolve(data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};
