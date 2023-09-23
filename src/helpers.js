export const DEFAULT_CLOCK_TIME = "300s";

/**
 *  Returns a string that can be used as a CSS animation rule
 * @param {string} time - The time the animation should take
 * @param {boolean} pause - Whether the animation should be paused
 * @returns {string} - A string that can be used as a CSS animation rule
 */
export function getRotaRule(time = DEFAULT_CLOCK_TIME, pause = false) {
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
  time = DEFAULT_CLOCK_TIME,
  reverse = false,
  pause = false
) {
  if (reverse) {
    return `opa ${time} steps(1, end) 1 reverse` + (pause ? ` paused` : "");
  }
  return `opa ${time} steps(1, end) 1` + (pause ? ` paused` : "");
}

/**
 * Returns number of milliseconds in a string
 * @param {string} string - A string in the format of "300s"
 * @returns {number} - The number of milliseconds in the string
 */
export function getMSfromString(string) {
  const number = string.split("s")[0];
  return number * 1000;
}

/**
 * Returns the number of seconds in passed time in minutes
 * @param {number} timeInMinutes
 * @returns {number} - The number of seconds in the timeInMinutes
 */
export function convertMinutesToSeconds(timeInMinutes) {
  return timeInMinutes * 60;
}
