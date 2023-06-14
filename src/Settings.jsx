// TODO change this to use a controlled form

function Settings({ setTimeInMinutes }) {
  return (
    <div>
      <h3>Settings</h3>
      <ul>
        <li>
          Time in minutes:
          <input
            type="number"
            value={setTimeInMinutes[0]}
            min="1"
            onChange={(e) => {
              e.preventDefault();
              let value = parseInt(e.target.value);
              if (typeof value === "number" && !isNaN(value)) {
                setTimeInMinutes[1](value);
              }
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Settings;
