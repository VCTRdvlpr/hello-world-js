import React from "react";
import MainNavBar from "../../main-nav-bar";
import ResponsiveNavBar from "../../responsiveNavBarComponent";

const LinguagensMe = () => {
    return(
        <div>
            <MainNavBar/>
            <ResponsiveNavBar/>
            <h1>Hello <span id='title-color'>world</span> !</h1>            
        </div>
    );
}

export default LinguagensMe;