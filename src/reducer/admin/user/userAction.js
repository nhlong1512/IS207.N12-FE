import {
  getAllUserPending,
  getAllUserSuccess,
  getAllUserFail,
  getDetailUser,
  updateStaffPending,
  updateStaffSuccess,
  updateStaffFail,
} from "./userSlice";
import { getAlUser, updateStaff } from "../../../api/admin/Users";

export const getAllUserProfile = () => async (dispatch) => {
  dispatch(getAllUserPending());
  try {
    const response = await getAlUser();
    console.log("test", response);
    if (response.status === true) {
      dispatch(getAllUserSuccess(response));
    }

    dispatch(getAllUserFail(response));
  } catch (err) {
    dispatch(getAllUserFail({ error: true, message: err.message }));
  }
};

export const updateDetailStaff = (userInfo, id) => async (dispatch) => {
  dispatch(updateStaffPending());
  try {
    const { data } = await updateStaff(userInfo, id);
    console.log("test", data);
    if (data.status === true) {
      dispatch(updateStaffSuccess(data));
    }

    dispatch(updateStaffFail(data));
  } catch (err) {
    dispatch(updateStaffFail({ error: true, message: err.message }));
  }
};

