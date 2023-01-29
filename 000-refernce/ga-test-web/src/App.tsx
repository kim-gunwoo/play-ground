import React, { useEffect } from 'react';
import './App.css';
import ReactGA from "react-ga";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";

ReactGA.initialize(process.env.REACT_APP_ID || "");

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    ReactGA.event({category: 'UserAgent', action: userAgent});
    ReactGA.event({category: 'test', action: "action test"});
    ReactGA.set({ page: location.pathname , userAgent :userAgent });
    ReactGA.pageview(location.pathname);
  }, [location]);

  return <></>;
};

function App() {
  const pathname = window.location.pathname;

  useEffect(()=> {
    const userAgent = window.navigator.userAgent;
    console.log(pathname)
    console.log(userAgent)
    ReactGA.set({ page: pathname,userAgent });
    ReactGA.pageview(pathname);
    ReactGA.event({category: 'UserAgent', action: userAgent});
    ReactGA.event({category: 'test', action: "action test"});
    
    ReactGA.send({ page: pathname,userAgent}, ["web test",pathname])
  },[pathname])  

  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<div>
          <NavLink to={"/about"} >about</NavLink>
          home
          <NavLink to={"/some"} >some</NavLink>
        </div>} />
        <Route path="/about" element={<div>
          <NavLink to={"/"} >home</NavLink>
          about
          <NavLink to={"/some"} >some</NavLink>
          </div>
        } />
        <Route path="/some" element={<div>
          <NavLink to={"/about"} >about</NavLink>
          some
          <NavLink to={"/"} >home</NavLink>
          </div>
        } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
