
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./views/LandingPage";
import { HomePage} from "./views/HomePage";
import * as React from "react";

console.log("test_App.tsx");

export const App = () => (
    <Routes>
        <Route path="/" element = {<LandingPage />} />
        <Route path="/home" element = {<HomePage />} />
    </Routes>
)