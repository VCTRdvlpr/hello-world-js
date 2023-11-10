import React from "react";
import { Link } from "react-router-dom";
import {TfiAngleDoubleLeft} from "react-icons/tfi"
import {TfiAngleDoubleRight} from "react-icons/tfi"
import { useState } from "react";

const MainNavBar = () =>{    

    const[contentVisibleMain, setContentVisibleMain] = useState(false);
    const handleButtonChangeMain = () =>{
        setContentVisibleMain(!contentVisibleMain)
    }

    const[buttonVisibleMain, setButtonVisibleMain] = useState(true);
    const handleButtonChangeMainSet = () =>{
        setButtonVisibleMain(!buttonVisibleMain)
    }

    return(
        <div>
            {contentVisibleMain &&
            <nav className='main-nav-align'>      
                <ul>                        
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
                <div className="NavHiddenBtnAlign">   
                    <button onClick={() =>{handleButtonChangeMain();handleButtonChangeMainSet()}}>
                        <TfiAngleDoubleLeft/>
                    </button>
                </div>                            
            </nav>   
            }               
            {buttonVisibleMain &&     
            <div className="NavShowBtnAlign">
                <button onClick={() =>{handleButtonChangeMain();handleButtonChangeMainSet()}}>
                    <TfiAngleDoubleRight/>
                </button>
            </div>     
            }
        </div>
    );
}

export default MainNavBar;