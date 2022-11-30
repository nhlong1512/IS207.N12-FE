import {
  getUserPending,
  getUserSuccess,
  getUserFail,
  updateUserPending,
  updateUserSuccess,
  updateUserFail,
  changePassWordUserPending,
  changePassWordUserSuccess,
  changePassWordUserFail,
  deleteUserSuccess,
} from "./userSlice";
import { setAuth } from "../auth/authSlice";
import { changePassword, fetchUser, updateUser } from "../../api/userApi";
import { userLogout } from "../../api/authApi";

export const getUserProfile = () => async (dispatch) => {
  dispatch(getUserPending());
  try {
    const response = await fetchUser();
    console.log("test", response);
    if (response.status === true) {
      dispatch(getUserSuccess(response));
      dispatch(setAuth());
    }

    dispatch(getUserFail(response));
  } catch (err) {
    dispatch(getUserFail({ error: true, message: err.message }));
  }
};

export const updateUserProfile = (userInfor, id) => async (dispatch) => {
  dispatch(updateUserPending());
  try {
    const response = await updateUser(userInfor, id);
    console.log("test", response);
    if (response.status === true) {
      dispatch(updateUserSuccess(response));
      dispatch(setAuth());
    }

    // dispatch(updateUserFail(response));
  } catch (err) {
    dispatch(updateUserFail({ error: true, message: err.message }));
  }
};
export const ChangePassWordUser = (userInfor, id) => async (dispatch) => {
  dispatch(changePassWordUserPending());
  try {
    const response = await changePassword(userInfor, id);
    console.log("action", response);
    if (response.status === true) {
      dispatch(changePassWordUserSuccess(response));
    }

    //  setTimeout(() => dispatch(changePassWordUserFail(response)), 2000);
  } catch (err) {
    dispatch(changePassWordUserFail({ error: true, message: err.message }));
  }
};

export const deleteUserProfile = () => async (dispatch) => {
  try {
    const response = await userLogout();
    console.log("logout", response);
    if (response.status === true) {
      dispatch(deleteUserSuccess());
    }

    //  setTimeout(() => dispatch(changePassWordUserFail(response)), 2000);
  } catch (err) {
    console.log(err);
  }
};


// export const getProfileGoogle = () => (dispatch) => {
//   dispatch(getUserPending());
//   try {

//   }
// };