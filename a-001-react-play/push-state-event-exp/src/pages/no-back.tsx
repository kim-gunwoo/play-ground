import { useEffect, useState } from "react";

declare interface Window {
    browser: any;
}


export default function NoBack() {

    // const preventClose = (e: BeforeUnloadEvent) => {
    //     e.preventDefault();
    //     e.returnValue = ""; //Chrome에서 동작하도록; deprecated
    //   };

    //   useEffect(() => {
    //     (() => {
    //       window.addEventListener("beforeunload", preventClose);
    //     })();
    //     return () => {
    //       window.removeEventListener("beforeunload", preventClose);
    //     };
    //   }, []);

    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        console.log("start history.state ", history.state)
        console.log(window.history.length, history.length)

        if(toggle) {
            
        }
        

        if (history?.state?.url === location.pathname) {
            return;
        }

        if (!history.state) {
            history.back();
            return;
        }

        const preventGoBack = () => {
            history.pushState("onload", '', location.href);
            console.log('prevent go back!');
        };


        history.pushState(null, '', location.href);
        window.addEventListener('popstate', preventGoBack);


        console.log("event end");
        return () => window.removeEventListener('popstate', preventGoBack);
    }, [toggle]);

    return <div>
        no back page

        <button onClick={() => setToggle(prev => !prev)} >
            button {`toggle : ${toggle}`}
        </button>


    </div>
}