import {
  getAllUserPending,
  getAllUserSuccess,
  getAllUserFail,
  getDetailUser,
} from "./userSlice";
import { getAlUser } from "../../../api/admin/Users";

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

