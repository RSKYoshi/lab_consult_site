import * as React from "react";
import {Link} from "react-router-dom";


const goToHome = () =>{
    let path = "/home";
}

export const ClickableButton = () => {
    return <button onClick={goToHome}>this is a button</button>
}