import { useDispatch } from "react-redux";
import { setTime } from "./clockCountDownSlice";
import { getTimeCSSValue } from "./helpers";
interface SettingsProps {
  setTimeInMinutes: [number, React.Dispatch<React.SetStateAction<number>>];
}

function Settings({ setTimeInMinutes }: SettingsProps) {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h3>Settings</h3>
      <ul className="settings-list">
        <li>
          Set clock time in minutes:
          <input
            type="text"
            value={setTimeInMinutes[0]}
            onChange={(e) => {
              e.preventDefault();
              const value = parseInt(e.target.value);
              dispatch(setTime(getTimeCSSValue(value)));
              if (typeof value === "number" && !isNaN(value)) {
                setTimeInMinutes[1](value);
              } else {
                setTimeInMinutes[1](0);
              }
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Settings;
