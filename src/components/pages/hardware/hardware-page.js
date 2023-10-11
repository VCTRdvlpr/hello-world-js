import React, { useState } from "react";
import MainNavBar from "../../main-nav-bar";
import ResponsiveNavBar from "../../responsiveNavBarComponent";
import ContentBtnComponent from "../../contentBtnComponent";
import HeaderComponent from "../../headerComponent";

const Hardware = () =>{

    const[contentVisibleComponentesPC, setContentVisibleComponentesPC] = useState(false);
    const handleButtonClickComponentsPC = () =>{
        setContentVisibleComponentesPC(contentVisibleComponentesPC)
    }

    return(
        <div>
            <HeaderComponent/>
            <MainNavBar/>
            <ResponsiveNavBar/>
            <h1>Hello <span className='title-color'>world</span> !</h1>            
            <nav>
                <ul className="nav-align">
                    <li>
                        <ContentBtnComponent title={"Principais componentes PC"} onClick={handleButtonClickComponentsPC}/>
                        {contentVisibleComponentesPC &&
                            <div className="content-align">
                            </div>
                        }
                    </li>
                </ul>            
            </nav>
        </div>
    ); 
}

export default Hardware;