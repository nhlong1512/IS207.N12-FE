import { checkEmailExist, userLogin, userRegister } from "../../api/authApi";
import { deleteUserProfile, getUserProfile } from "../user/userAction";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
  getForgotEmailStart,
  getForgotEmailSuccess,
  getForgotEmailFailure,
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
      if (
        response.data.user.role == "quanli" ||
        response.data.user.role == "nhanvien"
      ) {
        window.localStorage.setItem("role", response.data.user.role);
        navigate("/admin");
      } else {
        window.localStorage.setItem("role", response.data.user.role);
        navigate("/");
      }
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

export const checkMail = (email) => async (dispatch) => {
  dispatch(getForgotEmailStart());
  try {
    const response = await checkEmailExist(email);
    console.log(response);
    console.log("exist");

    if (response.status === true) {
      dispatch(getForgotEmailSuccess(false));
    }

    // dispatch(getForgotEmailFailure(response));
  } catch (err) {
    dispatch(loginFailure({ error: true, message: err.message }));
  }
};
