/* eslint-disable jsx-a11y/anchor-is-valid */
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
        <nav className="navbar bg-body fixed-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link" to="/settings">
                      Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
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
