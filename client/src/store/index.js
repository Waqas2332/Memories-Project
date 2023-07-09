import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import postReducer from "../slices/posts";
import thunk from "redux-thunk";

const store = configureStore(
  {
    reducer: {
      posts: postReducer,
    },
  },
  compose(applyMiddleware(thunk))
);

export default store;
