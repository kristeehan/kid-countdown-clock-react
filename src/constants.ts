/**
 * Represents the possible states of the countdown clock.
 * @typedef {'INITIAL' | 'PAUSED' | 'PLAYING' | 'OVER'} ClockState
 */
export type ClockState = "INITIAL" | "PAUSED" | "PLAYING" | "OVER";

/**
 * Interface representing the different states of the countdown clock.
 */
export interface ClockStates {
  INITIAL: ClockState;
  PAUSED: ClockState;
  PLAYING: ClockState;
  OVER: ClockState;
}

/**
 * An object containing the possible states of the countdown clock.
 */
export const CLOCK_STATES: ClockStates = Object.freeze({
  INITIAL: "INITIAL",
  PAUSED: "PAUSED",
  PLAYING: "PLAYING",
  OVER: "OVER",
});

export const DEFAULT_CLOCK_TIME_CSS = "300s"; // 5 minutes
export const DEFAULT_CLOCK_TIME = 5; // 5 minutes
