// TODO change this to use a controlled form

function Settings({ setTimeInMinutes }) {
  return (
    <div>
      <h3>Settings</h3>
      <ul>
        <li>
          Time in minutes:
          <input
            type="text"
            value={setTimeInMinutes[0]}
            onChange={(e) => {
              e.preventDefault();
              let value = parseInt(e.target.value);
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
