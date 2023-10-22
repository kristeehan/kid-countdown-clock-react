import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { Provider } from "react-redux";
import store from "../store";

import Clock from "../Clock";

describe("Clock", () => {
  test("renders the clock component", () => {
    const clock = render(
      <Provider store={store}>
        <Clock />
      </Provider>,
    );
    const clockElement = clock.findByTestId("clock-container");
    expect(clockElement).toBeTruthy();
    clock.unmount();
  });

  test("clicking the play and pause button changes the css styles", async () => {
    const clock = render(
      <Provider store={store}>
        <Clock />
      </Provider>,
    );
    const playButton = await clock.findByTestId("start-button");
    const pauseButton = await clock.findByTestId("pause-button");
    const spinner = screen.getByTestId("spinner");
    const filler = screen.getByTestId("filler");
    const mask = screen.getByTestId("mask");

    expect(spinner.style.animation).toBe("");
    expect(filler.style.animation).toBe("");
    expect(mask.style.animation).toBe("");
    expect(playButton).toBeTruthy();
    expect(pauseButton).toBeTruthy();

    fireEvent.click(playButton);

    expect(spinner.style.animation).toBe("rota 300s linear 1");
    expect(filler.style.animation).toBe("opa 300s steps(1, end) 1 reverse");
    expect(mask.style.animation).toBe("opa 300s steps(1, end) 1");

    fireEvent.click(pauseButton);

    expect(spinner.style.animation).toBe("rota 300s linear 1 paused");
    expect(filler.style.animation).toBe(
      "opa 300s steps(1, end) 1 reverse paused",
    );
    expect(mask.style.animation).toBe("opa 300s steps(1, end) 1 paused");

    clock.unmount();
  });
});
