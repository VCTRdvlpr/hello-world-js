import React from "react";
import HeaderBtnComponent from "./headerBtnComponent";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
    return(
        <div className="HeaderStyle">
            <Link to={"/"}>
                <h2>Hello <span className='title-color'>world</span> !</h2>
            </Link>
            <div >
                <ul className="HeaderBtnAlign">
                    <li className="HeaderBtnStyle">                        
                        <Link to={"/"}>
                            <HeaderBtnComponent title={"Home"} />
                        </Link>                        
                    </li>
                    <li className="HeaderBtnStyle">                        
                        <Link to={"/cadastro"}>
                            <HeaderBtnComponent title={"Cadastro"}/> 
                        </Link>                        
                    </li>
                    <li className="HeaderBtnStyle">                        
                        <Link to={"/login"}>
                            <HeaderBtnComponent title={"Login"}/>
                        </Link>                        
                    </li>
                    <li className="HeaderBtnStyle">                        
                        <Link to={"/sobre"}>
                            <HeaderBtnComponent title={"Sobre"} />
                        </Link>                        
                    </li>                    
                </ul>
            </div>            
        </div>
    )
}

export default HeaderComponent