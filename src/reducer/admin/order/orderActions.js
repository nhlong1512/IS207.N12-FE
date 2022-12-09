import { getAllOrder } from "../../../api/admin/Order";
import {
  getAllOrderPending,
  getAllOrderSuccess,
  getAllOrderFail,
} from "./orderSlice";

export const getAllOrders = () => async (dispatch) => {
  dispatch(getAllOrderPending());
  try {
    const response = await getAllOrder();
    console.log("test", response);
    if (response.status === true) {
      dispatch(getAllOrderSuccess(response));
    }

    dispatch(getAllOrderFail(response));
  } catch (err) {
    dispatch(getAllOrderFail({ error: true, message: err.message }));
  }
};
