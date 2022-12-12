import { getHoaDon } from "../../../api/admin/Hoadon";
import { getAllOrder } from "../../../api/admin/Order";
import {
  getHoaDonPending,
  getHoaDonSuccess,
  getHoaDonFail,
} from "./hoadonSlice";

export const getHoaDonAction = () => async (dispatch) => {
  dispatch(getHoaDonPending());
  try {
    const response = await getHoaDon();
    console.log("test", response);
    if (response.status === true) {
      dispatch(getHoaDonSuccess(response));
    }

    dispatch(getHoaDonFail(response));
  } catch (err) {
    dispatch(getHoaDonFail({ error: true, message: err.message }));
  }
};
