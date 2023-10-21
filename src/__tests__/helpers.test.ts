import {
  getRotaRule,
  getOpaRule,
  convertMinutesToSeconds,
  convertSecondsToMinutes,
  getTimeCSSValue,
  getTimeFromCSSValue,
} from "../helpers";
import { DEFAULT_CLOCK_TIME_CSS } from "../constants";
import { expect, describe, test } from "vitest";

describe("getRotaRule", () => {
  test("should return a rota rule string with the given time and no pause", () => {
    const time = "10s";
    const expected = `rota ${time} linear 1`;
    expect(getRotaRule(time)).toEqual(expected);
  });

  test("should return a rota rule string with the given time and pause", () => {
    const time = "5s";
    const expected = `rota ${time} linear 1 paused`;
    expect(getRotaRule(time, true)).toEqual(expected);
  });

  test("should return a rota rule string with the default time and no pause", () => {
    const expected = `rota ${DEFAULT_CLOCK_TIME_CSS} linear 1`;
    expect(getRotaRule()).toEqual(expected);
  });

  test("should return a rota rule string with the default time and pause", () => {
    const expected = `rota ${DEFAULT_CLOCK_TIME_CSS} linear 1 paused`;
    expect(getRotaRule(undefined, true)).toEqual(expected);
  });
});

describe("getOpaRule", () => {
  test("should return an opacity rule string with the given time and no pause", () => {
    const time = "10s";
    const expected = `opa ${time} steps(1, end) 1`;
    expect(getOpaRule(time)).toEqual(expected);
  });

  test("should return an opacity rule string with the given time, reverse and no pause", () => {
    const time = "5s";
    const expected = `opa ${time} steps(1, end) 1 reverse`;
    expect(getOpaRule(time, true)).toEqual(expected);
  });

  test("should return an opacity rule string with the given time, reverse and pause", () => {
    const time = "5s";
    const expected = `opa ${time} steps(1, end) 1 reverse paused`;
    expect(getOpaRule(time, true, true)).toEqual(expected);
  });

  test("should return an opacity rule string with the default time and no pause", () => {
    const expected = `opa ${DEFAULT_CLOCK_TIME_CSS} steps(1, end) 1`;
    expect(getOpaRule()).toEqual(expected);
  });

  test("should return an opacity rule string with the default time, reverse and no pause", () => {
    const expected = `opa ${DEFAULT_CLOCK_TIME_CSS} steps(1, end) 1 reverse`;
    expect(getOpaRule(undefined, true)).toEqual(expected);
  });

  test("should return an opacity rule string with the default time, reverse and pause", () => {
    const expected = `opa ${DEFAULT_CLOCK_TIME_CSS} steps(1, end) 1 reverse paused`;
    expect(getOpaRule(undefined, true, true)).toEqual(expected);
  });
});

describe("convertSecondsToMinutes", () => {
  test("should convert 60 seconds to 1 minute", () => {
    const timeInSeconds = 60;
    const expected = 1;
    expect(convertSecondsToMinutes(timeInSeconds)).toEqual(expected);
  });

  test("should convert 120 seconds to 2 minutes", () => {
    const timeInSeconds = 120;
    const expected = 2;
    expect(convertSecondsToMinutes(timeInSeconds)).toEqual(expected);
  });

  test("should convert 180 seconds to 3 minutes", () => {
    const timeInSeconds = 180;
    const expected = 3;
    expect(convertSecondsToMinutes(timeInSeconds)).toEqual(expected);
  });

  test("should convert 300 seconds to 5 minutes", () => {
    const timeInSeconds = 300;
    const expected = 5;
    expect(convertSecondsToMinutes(timeInSeconds)).toEqual(expected);
  });
});

describe("getTimeCSSValue", () => {
  test("should return the correct CSS value for 1 minute", () => {
    const timeInMinutes = 1;
    const expected = "60s";
    expect(getTimeCSSValue(timeInMinutes)).toEqual(expected);
  });

  test("should return the correct CSS value for 5 minutes", () => {
    const timeInMinutes = 5;
    const expected = "300s";
    expect(getTimeCSSValue(timeInMinutes)).toEqual(expected);
  });

  test("should return the correct CSS value for 10 minutes", () => {
    const timeInMinutes = 10;
    const expected = "600s";
    expect(getTimeCSSValue(timeInMinutes)).toEqual(expected);
  });

  test("should return the correct CSS value for 30 minutes", () => {
    const timeInMinutes = 30;
    const expected = "1800s";
    expect(getTimeCSSValue(timeInMinutes)).toEqual(expected);
  });
});

describe("convertMinutesToSeconds", () => {
  test("should convert 1 minute to 60 seconds", () => {
    const timeInMinutes = 1;
    const expected = 60;
    expect(convertMinutesToSeconds(timeInMinutes)).toEqual(expected);
  });

  test("should convert 5 minutes to 300 seconds", () => {
    const timeInMinutes = 5;
    const expected = 300;
    expect(convertMinutesToSeconds(timeInMinutes)).toEqual(expected);
  });

  test("should convert 10 minutes to 600 seconds", () => {
    const timeInMinutes = 10;
    const expected = 600;
    expect(convertMinutesToSeconds(timeInMinutes)).toEqual(expected);
  });

  test("should convert 30 minutes to 1800 seconds", () => {
    const timeInMinutes = 30;
    const expected = 1800;
    expect(convertMinutesToSeconds(timeInMinutes)).toEqual(expected);
  });
});

describe("getTimeFromCSSValue", () => {
  test("should return the correct time in minutes for 60s", () => {
    const timeCSSValue = "60s";
    const expected = 1;
    expect(getTimeFromCSSValue(timeCSSValue)).toEqual(expected);
  });

  test("should return the correct time in minutes for 300s", () => {
    const timeCSSValue = "300s";
    const expected = 5;
    expect(getTimeFromCSSValue(timeCSSValue)).toEqual(expected);
  });

  test("should return the correct time in minutes for 600s", () => {
    const timeCSSValue = "600s";
    const expected = 10;
    expect(getTimeFromCSSValue(timeCSSValue)).toEqual(expected);
  });

  test("should return the correct time in minutes for 1800s", () => {
    const timeCSSValue = "1800s";
    const expected = 30;
    expect(getTimeFromCSSValue(timeCSSValue)).toEqual(expected);
  });
});
