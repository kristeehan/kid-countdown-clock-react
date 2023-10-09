import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { DEFAULT_CLOCK_TIME } from "./constants";
import Clock from "./Clock";
import Settings from "./Settings";

function KidCountDownClock() {
  const headline = `When it's all red, it's time for bed!`;
  const defaultTime = DEFAULT_CLOCK_TIME;
  const [timeInMinutes, setTimeInMinutes]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(defaultTime);
  return (
    <BrowserRouter>
      <h1>
        <Link to="/" className="title">
          {headline}
        </Link>
      </h1>
      <Routes>
        <Route path="/" element={<Clock timeInMinutes={timeInMinutes} />} />
        <Route
          path="/settings"
          element={
            <Settings setTimeInMinutes={[timeInMinutes, setTimeInMinutes]} />
          }
        />
      </Routes>
      <Link to="/settings">Settings</Link>
    </BrowserRouter>
  );
}
const container = document.getElementById("root");
if (!container) throw new Error("Could not find root element");
const root = createRoot(container);
root.render(<KidCountDownClock />);
