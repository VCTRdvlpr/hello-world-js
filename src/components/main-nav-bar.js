import React from "react";
import { Link } from "react-router-dom";

const MainNavBar = () =>{
    return(
        <nav>      
            <ul className='main-nav-align'> 
                <li>
                    <Link className="mainNavBtnStyle" to="/">Home</Link>
                </li>         
                <li>
                    <Link className="mainNavBtnStyle" to="/redes">Redes e Conexões</Link>
                </li>
            </ul>                
        </nav>
    );
}

export default MainNavBar;