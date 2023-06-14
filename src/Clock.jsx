import { useState, useEffect, useRef } from "react";
import ClockControls from "./ClockControls";
import { getRotaRule, getOpaRule, convertMinutesToSeconds } from "./helpers";

const CLOCK_STATES = Object.freeze({
  INITIAL: "INITIAL",
  PAUSED: "PAUSED",
  PLAYING: "PLAYING",
  OVER: "OVER",
});

function Clock({ timeInMinutes }) {
  const [clockState, setClockState] = useState(CLOCK_STATES.INITIAL);
  const [spinnerStyle, setSpinnerStyle] = useState({});
  const [fillerStyle, setFillerStyle] = useState({});
  const [maskStyle, setMaskStyle] = useState({});
  const timeCSS = `${convertMinutesToSeconds(timeInMinutes)}s`;

  let initialRender = useRef(true);

  useEffect(() => {
    const spinner = document.querySelector(".spinner");
    function onAnimationEnd() {
      // TODO put animation end stuff here
    }
    spinner.addEventListener("animationend", onAnimationEnd);

    return () => {
      spinner.removeEventListener("animationend", onAnimationEnd);
    };
  }, []);

  useEffect(() => {
    if (!initialRender.current) {
      if (clockState === CLOCK_STATES.PLAYING) {
        setSpinnerStyle({ animation: getRotaRule(timeCSS) });
        setFillerStyle({ animation: getOpaRule(timeCSS, true) });
        setMaskStyle({ animation: getOpaRule(timeCSS) });
      }

      if (clockState === CLOCK_STATES.PAUSED) {
        setSpinnerStyle({ animation: getRotaRule(timeCSS, true) });
        setFillerStyle({ animation: getOpaRule(timeCSS, true, true) });
        setMaskStyle({ animation: getOpaRule(timeCSS, false, true) });
      }

      if (clockState === CLOCK_STATES.INITIAL) {
        setSpinnerStyle({ animation: null });
        setFillerStyle({ animation: null });
        setMaskStyle({ animation: null });
      }
    } else {
      initialRender.current = false;
    }
  }, [clockState]);

  return (
    <div id="clock-container">
      <div id="clock" data-test-current-state={clockState}>
        <div className="wrapper">
          <div className="spinner pie" style={spinnerStyle}></div>
          <div className="filler pie" style={fillerStyle}></div>
          <div className="mask" style={maskStyle}></div>
        </div>
        <ClockControls setClockState={setClockState} />{" "}
      </div>
    </div>
  );
}

export default Clock;
