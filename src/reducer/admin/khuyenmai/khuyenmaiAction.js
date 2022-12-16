import { getKhuyenMai } from "../../../api/admin/KhuyenMai";
import {
  getKhuyenmaiPending,
  getKhuyenmaiSuccess,
  getKhuyenmaiFail,
} from "./khuyenmaiSlice";

export const getKhuyenMaiAction = () => async (dispatch) => {
  dispatch(getKhuyenmaiPending());
  try {
    const response = await getKhuyenMai();
    console.log("test1", response);
    if (response.status === true) {
      dispatch(getKhuyenmaiSuccess(response));
    }

    dispatch(getKhuyenmaiFail(response));
  } catch (err) {
    dispatch(getKhuyenmaiFail({ error: true, message: err.message }));
  }
};
