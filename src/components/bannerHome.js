import React from "react";
import BannerFirst from "../img/banner01.jpg"

const BannerHomeComponent = () =>{
    return(
        <div className="BannerImgAlign">            
            <img src={BannerFirst} alt="Banner" />
        </div>
    );
} 

export default BannerHomeComponent;