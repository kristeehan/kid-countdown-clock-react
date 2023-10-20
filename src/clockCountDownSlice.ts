import { createSlice } from "@reduxjs/toolkit";

export interface RootState {
  countDown: clockAppState;
}

interface clockAppState {
  time: string;
}

interface setTimeAction {
  payload: string;
}

const initialState: clockAppState = {
  time: "300s",
};

export const countDownSlice = createSlice({
  name: "CountDown",
  initialState,
  reducers: {
    setTime: (state: clockAppState, action: setTimeAction) => {
      console.log(action.payload);
      state.time = action.payload;
    },
  },
});

export const { setTime } = countDownSlice.actions;
export default countDownSlice.reducer;
