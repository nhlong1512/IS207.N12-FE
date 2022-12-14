import { getAllBlogs } from "../../../api/admin/Blog";
import { getBlogPending, getBlogSuccess, getBlogFail } from "./blogSlice";

export const getBlogAction = () => async (dispatch) => {
  dispatch(getBlogPending());
  try {
    const response = await getAllBlogs();
    console.log("test", response);
    if (response.status === true) {
      dispatch(getBlogSuccess(response));
    }

    dispatch(getBlogFail(response));
  } catch (err) {
    dispatch(getBlogFail({ error: true, message: err.message }));
  }
};
