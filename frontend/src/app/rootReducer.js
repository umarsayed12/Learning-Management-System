import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import { authApi } from "@/slices/api/authApi";
import { courseApi } from "@/slices/api/courseApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [courseApi.reducerPath]: courseApi.reducer,
  auth: authReducer,
});

export default rootReducer;
