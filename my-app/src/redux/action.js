import { GET_POSTS, GET_POST } from "./const";

export const getBlogs = () => (dispatch) => {
  dispatch({ type: GET_POSTS });
};

export const getBlog = () => (dispatch) => {
  dispatch({ type: GET_POST });
};
