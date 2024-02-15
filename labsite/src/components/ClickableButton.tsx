import * as React from "react";
import {Link} from "react-router-dom";


const goToHome = () =>{
    location.href = "location.href='https://google.com";
}

export const ClickableButton = () => {
    return <button type="button" onClick={goToHome}>this is a button</button>
}