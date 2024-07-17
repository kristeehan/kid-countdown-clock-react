import { useState, useEffect, useRef, CSSProperties } from "react";
import ClockControls from "./ClockControls";
import { getRotaRule, getOpaRule, formatTime } from "./helpers";
import { CLOCK_STATES, ClockState } from "./constants";
import { useSelector } from "react-redux";
import { RootState } from "./clockCountDownSlice";

interface AnimationStyle extends CSSProperties {
  animation?: string;
}

/**
 * A countdown clock component that displays a spinning pie chart and controls to start, pause, and reset the timer.
 * @returns {JSX.Element} - The rendered component.
 */
function Clock() {
  const currentTime: string = useSelector(
    (state: RootState) => state.countDown.time,
  );
  const [clockState, setClockState]: [
    ClockState,
    React.Dispatch<React.SetStateAction<ClockState>>,
  ] = useState(CLOCK_STATES.INITIAL);
  const [spinnerStyle, setSpinnerStyle]: [
    AnimationStyle,
    React.Dispatch<React.SetStateAction<AnimationStyle>>,
  ] = useState({});
  const [fillerStyle, setFillerStyle]: [
    AnimationStyle,
    React.Dispatch<React.SetStateAction<AnimationStyle>>,
  ] = useState({});
  const [maskStyle, setMaskStyle]: [
    AnimationStyle,
    React.Dispatch<React.SetStateAction<AnimationStyle>>,
  ] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(parseInt(currentTime, 10));

  const initialRender: React.MutableRefObject<boolean> = useRef(true);
  const formatTimeTimeout: React.MutableRefObject<number> = useRef(Infinity);

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
    [clockState, timeCSS],
  );

  useEffect(
    function timerHandler() {
      if (clockState === CLOCK_STATES.PLAYING) {
        formatTimeTimeout.current = setInterval(() => {
          setTimeRemaining((prevTimeRemaining) => {
            if (prevTimeRemaining === 0) {
              setClockState(CLOCK_STATES.OVER);
              return 0;
            }
            console.log(formatTime(prevTimeRemaining - 1));
            return prevTimeRemaining - 1;
          });
        }, 1000);
      } else if (formatTimeTimeout.current) {
        clearInterval(formatTimeTimeout.current);
      }

      if (
        clockState === CLOCK_STATES.INITIAL ||
        clockState === CLOCK_STATES.OVER
      ) {
        setTimeRemaining(parseInt(currentTime, 10));
      }

      return () => {
        clearInterval(formatTimeTimeout.current);
      };
    },
    [clockState, currentTime],
  );

  return (
    <div
      data-testid="clock-container"
      id="clock-container"
      className="container"
    >
      <div id="clock" data-test-current-state={clockState}>
        <div
          className={`wrapper ${
            clockState === CLOCK_STATES.OVER ? "time-over" : ""
          }`}
        >
          <div
            data-testid="spinner"
            className="spinner pie"
            style={spinnerStyle}
          ></div>
          <div
            data-testid="filler"
            className="filler pie"
            style={fillerStyle}
          ></div>
          <div data-testid="mask" className="mask" style={maskStyle}></div>
        </div>
        <div className="time-remaining">{formatTime(timeRemaining)}</div>
        <ClockControls
          setClockState={setClockState}
          clockState={clockState}
        />{" "}
      </div>
    </div>
  );
}

export default Clock;
