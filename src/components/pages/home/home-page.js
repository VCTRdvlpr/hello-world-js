import React from "react";
import MainNavBar from "../../main-nav-bar";
import ResponsiveNavBar from "../../responsiveNavBarComponent";
import HeaderComponent from "../../headerComponent";
import BannerHomeComponent from "../../bannerHome";

const Home = () =>{
    return(
        <div>
            <div>
                <HeaderComponent/>
                <MainNavBar/>                
                <ResponsiveNavBar/>
                <h1>Hello <span className='title-color'>world</span> !</h1>  
                <BannerHomeComponent/>
            </div>                     
        </div>
    );
}

export default Home;