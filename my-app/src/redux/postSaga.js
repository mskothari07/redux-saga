import { takeEvery, put } from "redux-saga/effects";
import { GET_POSTS, SET_GET_POSTS, SET_GET_POST, GET_POST } from "./const";

function* getPosts() {
  let data = yield fetch(`http://localhost:8000/server/blogs`);
  data = yield data.json();
  // console.log(data);
  yield put({ type: SET_GET_POSTS, data });
}

function* getPost() {
  let data = yield fetch(`http://localhost:8000/server/blogs/:id`);
  data = yield data.json();
  yield put({ type: SET_GET_POST, data });
}

export function* postSaga() {
  yield takeEvery(GET_POSTS, getPosts);
}

export function* postsSaga() {
  yield takeEvery(GET_POST, getPost);
}
