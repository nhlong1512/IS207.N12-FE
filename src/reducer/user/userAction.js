import {
  getUserPending,
  getUserSuccess,
  getUserFail,
  deleteUserSuccess,
} from "./userSlice";
import { setAuth } from "../auth/authSlice";
import { fetchUser } from "../../api/userApi";

export const getUserProfile = () => async (dispatch) => {
  dispatch(getUserPending());
  try {
    const response = await fetchUser();
    console.log("test",response);
    if (response.status === true) {
      dispatch(getUserSuccess(response.user));
      dispatch(setAuth());
    }

    dispatch(getUserFail(response));
  } catch (err) {
    dispatch(getUserFail({ error: true, message: err.message }));
  }
};

export const deleteUserProfile = () => (dispatch) => {
  dispatch(deleteUserSuccess());
};
