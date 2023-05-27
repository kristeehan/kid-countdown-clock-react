import { createRoot } from "react-dom/client";
import Clock from "./Clock";

function KidCountDownClock() {
  const headline = `When it's all red, it's time for bed!`;
  const defaultTime = 5;
  return (
    <div>
      <h1>{headline}</h1>
      <div id="clock-container">
        <Clock timeInMinutes={defaultTime} />
      </div>
    </div>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<KidCountDownClock />);
