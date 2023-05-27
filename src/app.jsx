import { createRoot } from "react-dom/client";

function KidCountDownClock() {
  return <div className="wrapper"></div>;
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<KidCountDownClock />);
