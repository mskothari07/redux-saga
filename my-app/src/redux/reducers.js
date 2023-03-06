import { SET_GET_POSTS, SET_GET_POST } from "./const";

const posts = (data = [], action) => {
  switch (action.type) {
    case SET_GET_POSTS:
      console.log("Reducer Called", action);
      return [action.data];

    case SET_GET_POST:
      console.log("Single Post Reducer", action);
      return [action.data];

    default:
      return "default";
  }
};

export default posts;
