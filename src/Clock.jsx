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
          <button
            onClick={(e) => {
              e.preventDefault();
              setClockState(CLOCK_STATES.PLAYING);
            }}
          >
            PLAY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Clock;
