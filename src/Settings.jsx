function Settings({ setTimeInMinutes }) {
  return (
    <div>
      <h3>Settings</h3>
      <ul>
        <li>
          Time in minutes:{" "}
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault();
              let value = parseInt(e.target.value);
              console.log(value);
              setTimeInMinutes(value);
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Settings;
