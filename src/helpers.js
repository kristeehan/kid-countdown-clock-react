export const DEFAULT_CLOCK_TIME = "300s";

export function getRotaRule(time = DEFAULT_CLOCK_TIME, pause = false) {
  return `rota ${time} linear 1` + (pause ? ` paused` : "");
}

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

export function getMSfromString(string) {
  const number = string.split("s")[0];
  return number * 1000;
}

export function convertMinutesToSeconds(timeInMinutes) {
  return timeInMinutes * 60;
}
