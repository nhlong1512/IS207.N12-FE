import { getAllProducts, getAllProductsAdmin } from "../../../api/bookApi";
import {
  fetchProductsLoading,
  fetchProductsSuccess,
  fetchProductsFail,
} from "./productSlice";

export const fetchProduct = () => async (dispatch) => {
  dispatch(fetchProductsLoading());
  try {
    const response = await getAllProductsAdmin();
    console.log(response);
    dispatch(fetchProductsSuccess(response.sanpham_admin));
  } catch (err) {
    dispatch(fetchProductsFail({ error: true, message: err.message }));
  }
};
