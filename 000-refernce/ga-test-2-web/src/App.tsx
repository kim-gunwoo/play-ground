import React, { useEffect } from 'react';
import './App.css';
import ReactGA from "react-ga";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";

// ReactGA.initialize(process.env.REACT_APP_ID || "");

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // const userAgent = window.navigator.userAgent;
    console.log(location)
    // ReactGA.event({category: 'UserAgent', action: userAgent});
    // ReactGA.event({category: 'test', action: "action test"});
    // ReactGA.set({ page: location.pathname , userAgent :userAgent });
    // ReactGA.pageview(location.pathname);
    // window.gtag('event', 'page_view', { 'send_to': 'UA-252984249-1' });
    // window.gtag('event', 'page_view');
    // window.gtag('event', 'page_view');
    window.gtag('event', 'page_view', {
      page_title: '타이틀 페이지명', page_location: location.pathname + location.search, page_path: location.pathname 
    });
    // window.gtag('event', 'page_view', {
    //   page_title: '타이틀 페이지명', page_location: location.pathname + location.search, page_path: location.pathname,
    //   // send_to: 'UA-252984249-1'
    // })
    // window.gtag('config', 'UA-252984249-1')
    // window.gtag('event', 'timing_complete', {
    //   'name': 'timingVar',
    //   'value': timingValue,
    //   'event_category': 'timingCategory',
    //   'event_label': 'timingLabel'
    // })

    // window.ga('send', 'pageview', location.pathname + location.search);
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
          <NavLink to={"/test"} >test</NavLink>
          <NavLink to={"/gogogo"} >gogogo</NavLink>
          <button onClick={() => {
            // window.gtag("event", { category: "버튼 이벤트",action: "home button",})
            window.gtag("event", "홈!!!!" ,{ event_category: "버튼 이벤트", event_label: "home button",})
            // window.ga("send","event" ,"button", "home button click")
          }}>
            home button
          </button>

        </div>} />
        <Route path="/about" element={<div>
          <NavLink to={"/"} >home</NavLink>
          about
          <NavLink to={"/some"} >some</NavLink>
          <button onClick={() => {
            // window.gtag("event", { category: "버튼 이벤트",action: "about button",})
            window.gtag("event", "어바웃@@@@" ,{ event_category: "버튼 이벤트", event_label: "about button",})
            // window.ga("send","event" ,"버튼", "some 버튼 클릭")
          }}>
            about button
          </button>
          </div>
        } />
        <Route path="/some" element={<div>
          <NavLink to={"/about"} >about</NavLink>
          some
          <NavLink to={"/"} >home</NavLink>
          <button onClick={() =>  {
            // window.gtag("event", { category: "버튼 이벤트",action: "about button",})
            window.gtag("event", "some 🚀" ,{ event_category: "버튼 이벤트", event_label: "some button",})
            // window.ga("send", "event" ,"button", "about 클릭")
          }}>
            some button
          </button>
          </div>
        } />
        <Route path="/test" element={<div>
          <NavLink to={"/"} >home</NavLink>
          </div>
        } />
        <Route path="/gogogo" element={<div>
          <NavLink to={"/"} >home</NavLink>
          </div>
        } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
