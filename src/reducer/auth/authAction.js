import { userLogin, userRegister } from "../../api/authApi";
import { deleteUserProfile, getUserProfile } from "../user/userAction";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./authSlice";

export const login = (userInfo, navigate) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await userLogin(userInfo);
    console.log(response);

    if (response.status === true) {
      dispatch(loginSuccess(response));
      window.localStorage.setItem("accessToken", response.data.token);
      dispatch(getUserProfile());
      navigate("/");
    }

    dispatch(loginFailure(response));
  } catch (err) {
    dispatch(loginFailure({ error: true, message: err.message }));
    window.localStorage.removeItem("accessToken");
  }
};

export const register = (userInfo, navigate) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await userRegister(userInfo);
    console.log(response);
    console.log("register1");

    if (response.status === true) {
      dispatch(loginSuccess(response));
      window.localStorage.setItem("accessToken", response.token);
      dispatch(getUserProfile());
      navigate("/");
    }

    dispatch(loginFailure(response));
  } catch (err) {
    dispatch(loginFailure({ error: true, message: err.message }));
    window.localStorage.removeItem("accessToken");
  }
};

export const logout = () => async (dispatch) => {
  window.localStorage.removeItem("accessToken");
  dispatch(deleteUserProfile());
  dispatch(logoutSuccess({ error: false, message: "Đăng xuất thành công" }));
};
