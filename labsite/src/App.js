
import React from "react";
import {Route, Routes} from "react-router-dom";
import {LandingPage} from "/views/LandingPage";

function App(){
    return (
        <>
            <div>
                <Routes>
                        <Route path = "/landing" component = {<LandingPage />} />
                </Routes>
            </div>
        </>
    )
}
export default App;