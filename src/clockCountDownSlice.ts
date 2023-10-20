import { createSlice } from "@reduxjs/toolkit";

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
      state.time = action.payload;
    },
  },
});

export const { setTime } = countDownSlice.actions;
export default countDownSlice.reducer;
