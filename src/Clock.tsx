import { useState, useEffect, useRef, CSSProperties } from "react";
import ClockControls from "./ClockControls";
import { getRotaRule, getOpaRule, convertMinutesToSeconds } from "./helpers";
import { CLOCK_STATES, ClockState } from "./constants";

interface ClockProps {
  timeInMinutes: number;
}

interface AnimationStyle extends CSSProperties {
  animation?: string;
}

function Clock({ timeInMinutes }: ClockProps) {
  const [clockState, setClockState]: [
    ClockState,
    React.Dispatch<React.SetStateAction<ClockState>>
  ] = useState(CLOCK_STATES.INITIAL);
  const [spinnerStyle, setSpinnerStyle]: [
    AnimationStyle,
    React.Dispatch<React.SetStateAction<AnimationStyle>>
  ] = useState({});
  const [fillerStyle, setFillerStyle]: [
    AnimationStyle,
    React.Dispatch<React.SetStateAction<AnimationStyle>>
  ] = useState({});
  const [maskStyle, setMaskStyle]: [
    AnimationStyle,
    React.Dispatch<React.SetStateAction<AnimationStyle>>
  ] = useState({});

  const timeCSS = `${convertMinutesToSeconds(timeInMinutes)}s`;

  const initialRender = useRef(true);

  useEffect(function addEventListeners() {
    const spinner = document.querySelector(".spinner");
    function onAnimationEnd() {
      setClockState(CLOCK_STATES.OVER);
    }
    spinner?.addEventListener("animationend", onAnimationEnd);

    return () => {
      spinner?.removeEventListener("animationend", onAnimationEnd);
    };
  }, []);

  useEffect(
    function animationEffect() {
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

        if (
          clockState === CLOCK_STATES.INITIAL ||
          clockState === CLOCK_STATES.OVER
        ) {
          setSpinnerStyle({ animation: undefined });
          setFillerStyle({ animation: undefined });
          setMaskStyle({ animation: undefined });
        }
      } else {
        initialRender.current = false;
      }
    },
    [clockState, timeCSS]
  );

  return (
    <div id="clock-container">
      <div id="clock" data-test-current-state={clockState}>
        <div
          className={`wrapper ${
            clockState === CLOCK_STATES.OVER ? "time-over" : ""
          }`}
        >
          <div className="spinner pie" style={spinnerStyle}></div>
          <div className="filler pie" style={fillerStyle}></div>
          <div className="mask" style={maskStyle}></div>
        </div>
        <ClockControls setClockState={setClockState} clockState={clockState} />{" "}
      </div>
    </div>
  );
}

export default Clock;
