import React from "react";
import { Link } from "react-router-dom";
import {TfiAngleDoubleDown} from "react-icons/tfi"
import {TfiAngleDoubleUp} from "react-icons/tfi"
import { useState } from "react";

const ResponsiveNavBar = () =>{

    const[contentVisible, setContentVisible] = useState(false);
    const handleButtonChange = () =>{
        setContentVisible(!contentVisible)
    }

    const[buttonVisible, setButtonVisible] = useState(true);
    const handleButtonChangeButton = () =>{
        setButtonVisible(!buttonVisible)
    }

    return(
        <div>
            <nav className="responsive-nav-align">
                {buttonVisible &&
                <div className="drop-down-main-btn">
                    <button onClick={() =>{handleButtonChange();handleButtonChangeButton()}}>
                        <TfiAngleDoubleDown/>
                    </button>
                </div>
                }
                {contentVisible &&                
                <ul>
                    <div className="drop-down-main-btn">
                        <button onClick={() =>{handleButtonChange();handleButtonChangeButton()}}>
                            <TfiAngleDoubleUp/>
                        </button>
                    </div>
                    <li>
                        <Link className="responsive-nav-btn" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="responsive-nav-btn" to="/hardware">Hardware</Link>
                    </li>                
                    <li>
                        <Link className="responsive-nav-btn" to="/sistemas-operacionais">Sistemas Operacionais</Link>
                    </li>
                    <li>
                        <Link className="responsive-nav-btn" to="/redes">Redes e Conexões</Link>
                    </li>
                    <li>
                        <Link className="responsive-nav-btn" to="/linguagens-me">Marcação e estilo</Link>
                    </li>
                    <li>
                        <Link className="responsive-nav-btn" to="/linguagens-programação">Linguagem de Programação</Link>
                    </li>
                    <li>
                        <Link className="responsive-nav-btn" to="/banco-de-dados">Banco de Dados</Link>
                    </li>
                </ul> 
                }
            </nav>

        </div>
    );
}

export default ResponsiveNavBar;