import { createSlice } from "@reduxjs/toolkit";

/**
 * Interface for the root state of the application.
 */
export interface RootState {
  countDown: clockAppState;
}

/**
 * Interface for the clock app state.
 */
interface clockAppState {
  time: string;
}

/**
 * Interface for the set time action.
 */
interface setTimeAction {
  payload: string;
}

/**
 * The initial state of the clock app.
 */
const initialState: clockAppState = {
  time: "300s",
};

/**
 * The slice of the Redux store that manages the countdown clock.
 */
export const countDownSlice = createSlice({
  name: "CountDown",
  initialState,
  reducers: {
    /**
     * Sets the time for the countdown clock.
     * @param state - The current state of the countdown clock.
     * @param action - The action containing the new time value.
     */
    setTime: (state: clockAppState, action: setTimeAction) => {
      state.time = action.payload;
    },
  },
});

export const { setTime } = countDownSlice.actions;
export default countDownSlice.reducer;
