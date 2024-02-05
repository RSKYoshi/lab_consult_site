
import {Route, Routes } from "react-router-dom";
// import {LandingPage} from "/Users/mac/IdeaProjects/lab_consult_site/labsite/src/views/LandingPage.tsx";
import {LandingPage} from "./views/LandingPage";
import * as React from "react";

console.log("test_App.tsx");

export const App = () => (
    // alert("test");
    // return (
    //     <>
    //         <div>
    //             <Routes>
    //                 <Route path="/" element={<LandingPage/>}/>
    //             </Routes>
    //         </div>
    //     </>
    // )

    <Routes>
            <Route path="/" element = {<LandingPage />} />
    </Routes>
)