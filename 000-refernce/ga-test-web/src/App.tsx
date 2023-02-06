import React, { useEffect } from "react";
import "./App.css";
import ReactGA from "react-ga";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

ReactGA.initialize(process.env.REACT_APP_ID || "UA-252984249-1");

export const Analytics = () => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    // ReactGA.event({ category: "UserAgent", action: userAgent });
    ReactGA.event({
      category: "window_reactga_event",
      action: "action test reactga",
    });
    ReactGA.set({ page: location.pathname, userAgent: userAgent });
    ReactGA.pageview(location.pathname);

    // window.ga("window_ga_event_test_ga");
    // window.ga("send", "window_ga_event_test_ga");
    // window.ga("send", "window_ga_event_test_ga", "이거 카테고리", "액션");
  }, [location]);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    // ReactGA.event({ category: "UserAgent", action: userAgent });
    // ReactGA.event({ category: "test", action: "action test" });
    // ReactGA.set({ page: location.pathname, userAgent: userAgent });
    // ReactGA.pageview(location.pathname);

    // window.ga("window_ga_event_test_ga");
    // window.ga("send", "window_ga_event_test_ga");
    window.ga("send", "window_ga_event_test_ga", "이거 카테고리", "액션");
  }, [location]);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    // ReactGA.event({ category: "UserAgent", action: userAgent });
    // ReactGA.event({ category: "test", action: "action test" });
    // ReactGA.set({ page: location.pathname, userAgent: userAgent });
    // ReactGA.pageview(location.pathname);

    // window.gtag("window_gtag_event_test");
    window.gtag("send", "window_gtag_event_test");
  }, [location]);

  return <></>;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Analytics />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavLink to={"/about"}>about</NavLink>
                home
                <NavLink to={"/some"}>some</NavLink>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <NavLink to={"/"}>home</NavLink>
                about
                <NavLink to={"/some"}>some</NavLink>
              </div>
            }
          />
          <Route
            path="/some"
            element={
              <div>
                <NavLink to={"/about"}>about</NavLink>
                some
                <NavLink to={"/"}>home</NavLink>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
