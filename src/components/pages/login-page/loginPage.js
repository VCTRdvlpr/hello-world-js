import React from "react";
import MainNavBar from "../../main-nav-bar";
import ResponsiveNavBar from "../../responsiveNavBarComponent";
import HeaderComponent from "../../headerComponent";

const LoginPageComponent = () =>{
    return(
        <div>
            <MainNavBar/>
            <ResponsiveNavBar/>
            <HeaderComponent/>
            <h1>
                Página de login
            </h1>
        </div>
    );
}

export default LoginPageComponent;