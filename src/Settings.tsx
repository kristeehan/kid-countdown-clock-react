// TODO change this to use a controlled form

interface SettingsProps {
  setTimeInMinutes: [number, React.Dispatch<React.SetStateAction<number>>];
}

function Settings({ setTimeInMinutes }: SettingsProps) {
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
