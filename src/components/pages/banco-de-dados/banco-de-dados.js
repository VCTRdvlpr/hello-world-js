import React from "react";
import MainNavBar from "../../main-nav-bar";
import ResponsiveNavBar from "../../responsiveNavBarComponent";
import HeaderComponent from "../../headerComponent";

const BancoDeDados = () => {
    return(
        <div>
            <HeaderComponent/>
            <MainNavBar/>
            <ResponsiveNavBar/>
            <h1>Hello <span className='title-color'>world</span> !</h1>            
        </div>
    );    
} 

export default BancoDeDados;