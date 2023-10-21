import { useDispatch } from "react-redux";
import { setTime } from "./clockCountDownSlice";
import { getTimeCSSValue } from "./helpers";
import { useSelector } from "react-redux";
import { RootState } from "./clockCountDownSlice";
import { getTimeFromCSSValue } from "./helpers";

/**
 * Settings component that allows the user to set the clock time in minutes.
 * @returns A React component that renders a form with an input field to set the clock time.
 */
function Settings() {
  const currentTime: string = useSelector(
    (state: RootState) => state.countDown.time
  );
  const timeInMinutes: number = getTimeFromCSSValue(currentTime);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h3>Settings</h3>
      <ul className="settings-list">
        <li>
          Set clock time in minutes:
          <input
            type="text"
            value={timeInMinutes}
            onChange={(e) => {
              e.preventDefault();
              let value: number = parseInt(e.target.value);
              if (isNaN(value)) {
                value = 0;
              }
              dispatch(setTime(getTimeCSSValue(value)));
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Settings;
