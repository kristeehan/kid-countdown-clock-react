import { configureStore, EnhancedStore, AnyAction } from "@reduxjs/toolkit";
import { ThunkMiddleware } from "redux-thunk";

const store: EnhancedStore<any, AnyAction, [ThunkMiddleware<any, AnyAction>]> =
  configureStore({
    reducer: {},
  });

export default store;
