export const DEFAULT_CLOCK_TIME = "300s";

export function getRotaRule(time = DEFAULT_CLOCK_TIME) {
  return `rota ${time} linear 1`;
}

export function getOpaRule(time = DEFAULT_CLOCK_TIME, reverse = false) {
  if (reverse) {
    return `opa ${time} steps(1, end) 1 reverse`;
  }
  return `opa ${time} steps(1, end) 1`;
}

export function getMSfromString(string) {
  const number = string.split("s")[0];
  return number * 1000;
}
