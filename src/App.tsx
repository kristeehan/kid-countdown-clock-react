import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Clock from "./Clock";
import Settings from "./Settings";
import store from "./store";
import { Provider } from "react-redux";

function KidCountDownClock() {
  const headline = `When it's all red, it's time for bed!`;
  return (
    <BrowserRouter>
      <Provider store={store}>
        <h1>
          <Link to="/" className="title">
            {headline}
          </Link>
        </h1>
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <div className="footer">
          <Link to="/settings">Settings</Link>
          <Link to="/">Home</Link>
        </div>
      </Provider>
    </BrowserRouter>
  );
}
const container = document.getElementById("root");
if (!container) throw new Error("Could not find root element");
const root = createRoot(container);
root.render(<KidCountDownClock />);
