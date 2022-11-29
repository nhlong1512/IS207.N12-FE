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

    dispatch(updateUserFail(response));
  } catch (err) {
    dispatch(updateUserFail({ error: true, message: err.message }));
  }
};
export const ChangePassWordUser = (userInfor, id) => async (dispatch) => {
  dispatch(changePassWordUserPending());
  try {
    const response = await changePassword(userInfor, id);
 
    if (response.status === true) {
      dispatch(changePassWordUserSuccess(response));
    }

    // dispatch(changePassWordUserFail(response));
  } catch (err) {
    dispatch(changePassWordUserFail({ error: true, message: err.message }));
  }
};

export const deleteUserProfile = () => (dispatch) => {
  dispatch(deleteUserSuccess());
};


// export const getProfileGoogle = () => (dispatch) => {
//   dispatch(getUserPending());
//   try {

//   }
// };