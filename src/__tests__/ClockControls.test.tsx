import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import ClockControls from "../ClockControls";
import { CLOCK_STATES } from "../constants";

test("it renders the clock controls", async () => {
  // write a test that checks that the ClockControls component renders
  const mockState = CLOCK_STATES.INITIAL;
  const mockSetClockState = vi.fn();
  const clockControls = render(
    <ClockControls clockState={mockState} setClockState={mockSetClockState} />
  );

  const clockControlsElement = await clockControls.findByTestId(
    "clock-controls"
  );

  expect(clockControlsElement).toBeTruthy();
});
