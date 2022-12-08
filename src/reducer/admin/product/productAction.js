import { updateProduct } from "../../../api/admin/Product";
import { getAllProducts, getAllProductsAdmin } from "../../../api/bookApi";
import {
  fetchProductsLoading,
  fetchProductsSuccess,
  fetchProductsFail,
  updateProductPending,
  updateProductSuccess,
  updateProductFail,
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

export const updateDetailProduct = (productInfo, id) => async (dispatch) => {
  dispatch(updateProductPending());
  try {
    const { data } = await updateProduct(productInfo, id);
    console.log("test", data);
    if (data.status === true) {
      dispatch(updateProductSuccess(data));
    }

    dispatch(updateProductFail(data));
  } catch (err) {
    dispatch(updateProductFail({ error: true, message: err.message }));
  }
};
