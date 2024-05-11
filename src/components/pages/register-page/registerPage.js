import React from "react";
import MainNavBar from "../../main-nav-bar";
import ResponsiveNavBar from "../../responsiveNavBarComponent";
import HeaderComponent from "../../headerComponent";
import FormRegisterComponent from "../../formRegisterComponent";

const RegisterPageComponent = () =>{
    
    return(
        <div>
            <MainNavBar/>
            <ResponsiveNavBar/>
            <HeaderComponent/>  
            <div className="FormRegisterAlign">    
                <h2>
                    Informe seus dados
                </h2>      
                <h3>
                    Back end em construção !
                </h3>
                <FormRegisterComponent/>
            </div>
        </div>
    );
}

export default RegisterPageComponent;
