import * as React from 'react';
// import {Link} from "react-router-dom";
import {ClickableButton} from '../components/ClickableButton';
import { theme } from '../tailwind.config'
import beach from '../img/waikiki_beach.jpeg'


export const getThemeColor = (color:string) => theme.colors[color];
export const getbackgroundImage = (image: string) => theme.extend[image]

export const LandingPage = (): React.ReactElement => {
    console.log("test_LandingPage.tsx");
    return (
        <>
            <div style={{backgroundColor:getThemeColor('dark')}}>
                <img src={require(beach)} alt="img"/>
                Landing Page!!!
                Click here to go to home page:
                <ClickableButton to="/home" text="Home"/>
            </div>
        </>
    )
}