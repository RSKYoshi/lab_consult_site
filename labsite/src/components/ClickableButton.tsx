import * as React from "react";
import {Link} from "react-router-dom";



export const ClickableButton = (props: {text: string, to: string}) => {
    return <Link to = {`${props.to}`}>
                <button>{props.text}</button>
           </Link>
}