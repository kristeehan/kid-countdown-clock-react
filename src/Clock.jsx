import { useState } from "react";

const CLOCK_STATES = Object.freeze({
  INITIAL: "INITIAL",
  PAUSED: "PAUSED",
  PLAYING: "PLAYING",
  OVER: "OVER",
});

function Clock({ timeInMinutes }) {
  // break mask, filler, spinner into components?
  const [clockState, setClockState] = useState(CLOCK_STATES.INITIAL);

  return (
    <div id="clock" data-test-current-state={clockState}>
      <div className="wrapper">
        <div className="spinner pie"></div>
        <div className="filler pie"></div>
        <div className="mask"></div>
      </div>
      <div id="clock-controls">
        <div className="btn-toolbar mt-3 mb-3">
          <div className="btn-group">
            <button
              className="btn btn-primary"
              id="start"
              onClick={(e) => {
                e.preventDefault();
                setClockState(CLOCK_STATES.PLAYING);
              }}
            >
              Start
            </button>
            <button
              className="btn btn-primary"
              id="pause"
              onClick={(e) => {
                e.preventDefault();
                setClockState(CLOCK_STATES.PAUSED);
              }}
            >
              Pause
            </button>
            <button
              className="btn btn-primary"
              id="reset"
              onClick={(e) => {
                e.preventDefault();
                setClockState(CLOCK_STATES.PAUSED);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
