export type ClockState = "INITIAL" | "PAUSED" | "PLAYING" | "OVER";

export interface ClockStates {
  INITIAL: ClockState;
  PAUSED: ClockState;
  PLAYING: ClockState;
  OVER: ClockState;
}

export const CLOCK_STATES: ClockStates = Object.freeze({
  INITIAL: "INITIAL",
  PAUSED: "PAUSED",
  PLAYING: "PLAYING",
  OVER: "OVER",
});
