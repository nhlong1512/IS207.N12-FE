import { fetchBillLoading, fetchBillSuccess, fetchBillFail } from "./billSlice";
import { getAllBillUser } from "../../api/billApi";

export const fetchBill = (id) => async (dispatch) => {
  dispatch(fetchBillLoading());
  try {
    const response = await getAllBillUser(id);
    console.log("bill", response);
    dispatch(fetchBillSuccess(response.data));
  } catch (err) {
    dispatch(fetchBillFail({ error: true, message: err.message }));
  }
};
