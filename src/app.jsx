import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Clock from "./Clock";
import Settings from "./Settings";

function KidCountDownClock() {
  const headline = `When it's all red, it's time for bed!`;
  const defaultTime = 5;
  return (
    <BrowserRouter>
      <h1>
        <Link to="/">{headline}</Link>
      </h1>
      <Routes>
        <Route path="/" element={<Clock timeInMinutes={defaultTime} />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Link to="/settings">Settings</Link>
    </BrowserRouter>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<KidCountDownClock />);
