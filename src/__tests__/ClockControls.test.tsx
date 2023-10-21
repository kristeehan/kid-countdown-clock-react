import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import ClockControls from "../ClockControls";
import { CLOCK_STATES } from "../constants";

test("it renders the clock controls", async () => {
  const mockState = CLOCK_STATES.INITIAL;
  const mockSetClockState = vi.fn();
  const clockControls = render(
    <ClockControls clockState={mockState} setClockState={mockSetClockState} />
  );

  const clockControlsElement = await clockControls.findByTestId(
    "clock-controls"
  );
  expect(clockControlsElement).toBeTruthy();
  clockControls.unmount();
});
