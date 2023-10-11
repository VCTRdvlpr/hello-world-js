import React from "react";
import MainNavBar from "../../main-nav-bar";
import ResponsiveNavBar from "../../responsiveNavBarComponent";
import HeaderComponent from "../../headerComponent";

const AboutPageComponent = () =>{
    return(
        <div>
            <MainNavBar/>
            <ResponsiveNavBar/>
            <HeaderComponent/>
            <h1>
                Sobre
            </h1>
        </div>
    );
}

export default AboutPageComponent;