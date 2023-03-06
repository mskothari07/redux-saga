import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
// import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { postSaga, postsSaga } from "./postSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(postSaga, postsSaga);
export default store;
