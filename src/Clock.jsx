function Clock({ timeInMinutes }) {
  return (
    <div id="clock">
      <div className="wrapper">
        <div className="spinner pie"></div>
        <div className="filler pie"></div>
        <div className="mask"></div>
      </div>
      <div id="clock-controls">
        <div className="btn-toolbar mt-3 mb-3"></div>
      </div>
    </div>
  );
}

export default Clock;
