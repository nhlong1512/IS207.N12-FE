import { getAllProducts } from "../../api/bookApi";
import {
  fetchProductsLoading,
  fetchProductsSuccess,
  fetchProductsFail,
} from "./productSlice";

export const fetchProduct = () => async (dispatch) => {
  dispatch(fetchProductsLoading());
  try {
    const response = await getAllProducts();
    console.log(response);
    dispatch(fetchProductsSuccess(response));
  } catch (err) {
    dispatch(fetchProductsFail({ error: true, message: err.message }));
  }
};
