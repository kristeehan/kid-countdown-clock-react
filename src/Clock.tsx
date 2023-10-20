/**
 * A countdown clock component that displays a spinning pie chart and controls to start, pause, and reset the timer.
 *
 * @param {ClockProps} props - The props for the component.
 * @param {number} props.timeInMinutes - The time in minutes to count down from.
 * @returns {JSX.Element} - The rendered component.
 */
import { useState, useEffect, useRef, CSSProperties } from "react";
import ClockControls from "./ClockControls";
import { getRotaRule, getOpaRule } from "./helpers";
import { CLOCK_STATES, ClockState } from "./constants";
import { useSelector } from "react-redux";
import { RootState } from "./clockCountDownSlice";
interface AnimationStyle extends CSSProperties {
  animation?: string;
}

function Clock() {
  const currentTime: string = useSelector(
    (state: RootState) => state.countDown.time
  );
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

  const initialRender: React.MutableRefObject<boolean> = useRef(true);

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

  const timeCSS: string = currentTime;

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
    <div id="clock-container" className="container">
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
