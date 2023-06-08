import { useState, useEffect, useRef } from "react";
import ClockControls from "./ClockControls";
import { getRotaRule, getOpaRule } from "./helpers";

const CLOCK_STATES = Object.freeze({
  INITIAL: "INITIAL",
  PAUSED: "PAUSED",
  PLAYING: "PLAYING",
  OVER: "OVER",
});

function Clock() {
  // break mask, filler, spinner into components?
  const [clockState, setClockState] = useState(CLOCK_STATES.INITIAL);
  const [spinnerStyle, setSpinnerStyle] = useState({});
  const [fillerStyle, setFillerStyle] = useState({});
  const [maskStyle, setMaskStyle] = useState({});
  let initialRender = useRef(true);

  useEffect(() => {
    if (!initialRender.current) {
      if (clockState === CLOCK_STATES.PLAYING) {
        setSpinnerStyle({ animation: getRotaRule(`300s`) });
        setFillerStyle({ animation: getOpaRule(`300s`, true) });
        setMaskStyle({ animation: getOpaRule(`300s`) });
      }

      if (clockState === CLOCK_STATES.PAUSED) {
        setSpinnerStyle({ animation: getRotaRule(`300s`, true) });
        setFillerStyle({ animation: getOpaRule(`300s`, true, true) });
        setMaskStyle({ animation: getOpaRule(`300s`, false, true) });
      }
    } else {
      initialRender.current = false;
    }
  }, [clockState]);

  return (
    <div id="clock" data-test-current-state={clockState}>
      <div className="wrapper">
        <div className="spinner pie" style={spinnerStyle}></div>
        <div className="filler pie" style={fillerStyle}></div>
        <div className="mask" style={maskStyle}></div>
      </div>
      <ClockControls setClockState={setClockState} />{" "}
    </div>
  );
}

export default Clock;
