import * as React from "react";
import {Navbar} from "../components/Navbar";

export const HomePage = (): React.ReactElement => {
    console.log("test_HomePage.tsx");
    return (
        <>
            <div>
                Home Page!!!
            </div>
            <Navbar />
        </>
    )
}