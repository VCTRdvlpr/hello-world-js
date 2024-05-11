import React from "react";
import MainNavBar from "../../main-nav-bar";
import ResponsiveNavBar from "../../responsiveNavBarComponent";
import HeaderComponent from "../../headerComponent";
import LoginComponent from "../../loginComponent";

const LoginPageComponent = () =>{
    return(
        <div>
            <MainNavBar/>
            <ResponsiveNavBar/>
            <HeaderComponent/>
            <div className="LoginPageAlign">
                <h2>
                    Página de login
                </h2>
                <h3>
                    Back end em construção !
                </h3>
                <LoginComponent/>
            </div>

        </div>
    );
}

export default LoginPageComponent;