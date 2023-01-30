import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
      window.gtag("event", "test_add_event", {
        page_path: location.pathname + location.search + location.hash,
        page_search: location.search,
        page_hash: location.hash,
        user_agent: userAgent,
      });

  }, [location]);

  return <></>;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Analytics />
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
