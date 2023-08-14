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
                    <Link className="mainNavBtnStyle" to="/hardware">Hardware</Link>
                </li>                
                <li>
                    <Link className="mainNavBtnStyle" to="/sistemas-operacionais">Sistemas Operacionais</Link>
                </li>
                <li>
                    <Link className="mainNavBtnStyle" to="/redes">Redes e Conexões</Link>
                </li>
                <li>
                    <Link className="mainNavBtnStyle" to="/linguagens-me">Marcação e estilo</Link>
                </li>
                <li>
                    <Link className="mainNavBtnStyle" to="/linguagens-programação">Linguagem de Programação</Link>
                </li>
                <li>
                    <Link className="mainNavBtnStyle" to="/banco-de-dados">Banco de Dados</Link>
                </li>
            </ul>                
        </nav>
    );
}

export default MainNavBar;