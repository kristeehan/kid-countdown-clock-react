import { CLOCK_STATES } from "./constants";

function ClockControls({ setClockState }) {
  return (
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
              setClockState(CLOCK_STATES.INITIAL);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClockControls;
