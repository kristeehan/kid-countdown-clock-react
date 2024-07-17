import { DEFAULT_CLOCK_TIME_CSS } from "./constants";
/**
 *  Returns a string that can be used as a CSS animation rule
 * @param {string} time - The time the animation should take
 * @param {boolean} pause - Whether the animation should be paused
 * @returns {string} - A string that can be used as a CSS animation rule
 */
export function getRotaRule(
  time: string = DEFAULT_CLOCK_TIME_CSS,
  pause = false,
): string {
  return `rota ${time} linear 1` + (pause ? ` paused` : "");
}

/**
 * Returns a string that can be used as a CSS animation rule
 * @param {string} time - The time the animation should take
 * @param {boolean} reverse - Whether the animation should be reversed
 * @param {boolean} pause - Whether the animation should be paused
 * @returns {string} - A string that can be used as a CSS animation rule
 */
export function getOpaRule(
  time: string = DEFAULT_CLOCK_TIME_CSS,
  reverse = false,
  pause = false,
): string {
  if (reverse) {
    return `opa ${time} steps(1, end) 1 reverse` + (pause ? ` paused` : "");
  }
  return `opa ${time} steps(1, end) 1` + (pause ? ` paused` : "");
}

/**
 * Takes in time in seconds and returns minutes
 * @param timeInSeconds
 * @returns {number} - our time in minutes
 */
export function convertSecondsToMinutes(timeInSeconds: number): number {
  return timeInSeconds / 60;
}

/**
 * Returns the number of seconds in passed time in minutes
 * @param {number} timeInMinutes
 * @returns {number} - The number of seconds in the timeInMinutes
 */
export function convertMinutesToSeconds(timeInMinutes: number): number {
  return timeInMinutes * 60;
}
/**
 * Returns a string that can be used as a CSS animation time value
 * @param timeInMinutes
 * @returns {string} - Our css value
 */
export function getTimeCSSValue(timeInMinutes: number): string {
  const timeInSeconds = convertMinutesToSeconds(timeInMinutes);
  return `${timeInSeconds}s`;
}

/**
 * Takes in a CSS value like "300s" and returns that time in minutes
 * @param timeCSSValue
 * @returns {number} - time in minutes
 */
export function getTimeFromCSSValue(timeCSSValue: string): number {
  return convertSecondsToMinutes(Number(timeCSSValue.slice(0, -1)));
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  // Pad the seconds with a leading zero if necessary
  const paddedSeconds =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  return `${minutes}:${paddedSeconds}`;
}
