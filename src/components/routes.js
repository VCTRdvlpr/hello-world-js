import { BrowserRouter, Routes, Route } from "react-router-dom";
import RedesPage from "./pages/redes/redes-page";
import Home from "./pages/home/home-page";
import SistemasOperacionais from "./pages/sistemas-operacionais/sistemas-operacionais";
import LinguagensMe from "./pages/linguagens-me/linguagens-me-page";
import BancoDeDados from "./pages/banco-de-dados/banco-de-dados";
import LinguagemProgramacao from "./pages/linguagens-programacao/linguagens-programacao";
import Hardware from "./pages/hardware/hardware-page";

const RouteApp = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element= { <Home/> } path="/" exact/>
                <Route element= { <RedesPage/> } path="/redes"/>
                <Route element= { <SistemasOperacionais/> } path="/sistemas-operacionais" />
                <Route element= { <LinguagensMe/> } path="/linguagens-me" />
                <Route element= { <BancoDeDados/> } path="/banco-de-dados" />
                <Route element= { <LinguagemProgramacao/> } path="/linguagens-programação" />
                <Route element= { <Hardware/> } path="/hardware" />
            </Routes>
        </BrowserRouter>        
    );
}

export default RouteApp;