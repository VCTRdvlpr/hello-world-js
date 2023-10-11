import React from "react";
import HeaderBtnComponent from "./headerBtnComponent";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
    return(
        <div className="HeaderStyle">
            <Link to={"/"}>
                <h2>Hello <span className='title-color'>world</span> !</h2>
            </Link>
            <div className="HeaderBtnAlign">
                <Link to={"/cadastro"}>
                    <HeaderBtnComponent title={"Cadastro"}/> 
                </Link>
                <Link to={"/login"}>
                    <HeaderBtnComponent title={"Login"}/>
                </Link>
                <Link to={"/sobre"}>
                    <HeaderBtnComponent title={"Sobre"} />
                </Link>
            </div>            
        </div>
    )
}

export default HeaderComponent