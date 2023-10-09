import { CLOCK_STATES, ClockState } from "./constants";

interface ClockControlsProps {
  setClockState: React.Dispatch<React.SetStateAction<ClockState>>;
  clockState: string;
}

function ClockControls({ setClockState, clockState }: ClockControlsProps) {
  return (
    <div id="clock-controls" className="container">
      <div className="btn-toolbar mt-3 mb-3">
        <div className="btn-group">
          <button
            className={`btn btn-primary ${
              clockState === CLOCK_STATES.PLAYING ? "active" : ""
            }`}
            data-bs-toggle="button"
            id="start"
            onClick={(e) => {
              e.preventDefault();
              setClockState(CLOCK_STATES.PLAYING);
            }}
            disabled={clockState === CLOCK_STATES.PLAYING}
          >
            Start
          </button>
          <button
            className={`btn btn-secondary ${
              clockState === CLOCK_STATES.PAUSED ? "active" : ""
            }`}
            data-bs-toggle="button"
            id="pause"
            onClick={(e) => {
              e.preventDefault();
              setClockState(CLOCK_STATES.PAUSED);
            }}
            disabled={clockState === CLOCK_STATES.PAUSED}
          >
            Pause
          </button>
          <button
            className="btn btn-warning"
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
