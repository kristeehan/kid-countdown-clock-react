import { configureStore } from "@reduxjs/toolkit";
import { countDownSlice } from "./clockCountDownSlice";

const store = configureStore({
  reducer: {
    countDown: countDownSlice.reducer,
  },
});

export default store;
