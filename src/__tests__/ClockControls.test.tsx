import { expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import ClockControls from "../ClockControls";
import { CLOCK_STATES } from "../constants";

test("it renders the clock controls", async () => {
  const mockState = CLOCK_STATES.INITIAL;
  const mockSetClockState = vi.fn();
  const clockControls = render(
    <ClockControls clockState={mockState} setClockState={mockSetClockState} />,
  );

  const clockControlsElement =
    await clockControls.findByTestId("clock-controls");
  expect(clockControlsElement).toBeTruthy();
  clockControls.unmount();
});

test("Clicking on the play button changes the state to playing", async () => {
  const mockState = CLOCK_STATES.INITIAL;
  const mockSetClockState = vi.fn();
  const clockControls = render(
    <ClockControls clockState={mockState} setClockState={mockSetClockState} />,
  );

  const startButton: HTMLElement =
    await clockControls.findByTestId("start-button");
  fireEvent.click(startButton);
  expect(mockSetClockState).toHaveBeenCalledWith(CLOCK_STATES.PLAYING);
});

test("Clicking on the pause button changes the state to paused", async () => {
  const mockState = CLOCK_STATES.INITIAL;
  const mockSetClockState = vi.fn();
  const clockControls = render(
    <ClockControls clockState={mockState} setClockState={mockSetClockState} />,
  );

  const startButton: HTMLElement =
    await clockControls.findByTestId("start-button");
  fireEvent.click(startButton);
  expect(mockSetClockState).toHaveBeenCalledWith(CLOCK_STATES.PLAYING);
});
