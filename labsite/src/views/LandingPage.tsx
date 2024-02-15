import * as React from "react";
// import {Link} from "react-router-dom";
import {ClickableButton} from "../components/ClickableButton";

export const LandingPage = (): React.ReactElement => {
    console.log("test_LandingPage.tsx");
    // alert("test");
    return (
        <>
            <div>
                Landing Page!!!
                Click here to go to home page:
                <ClickableButton />
            </div>
        </>
    )
}