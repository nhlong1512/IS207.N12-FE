import { getAllProducts } from "../../api/bookApi";
import {
  fetchProductsLoading,
  fetchProductsSuccess,
  fetchProductsFail,
} from "./productSlice";

export const fetchProduct = (page) => async (dispatch) => {
  dispatch(fetchProductsLoading());
  try {
    const response = await getAllProducts(page);
    console.log(response);
    dispatch(fetchProductsSuccess(response.sanpham));
  } catch (err) {
    dispatch(fetchProductsFail({ error: true, message: err.message }));
  }
};
