import { BrowserRouter, Routes, Route } from "react-router-dom";
import RedesPage from "./pages/redes/redes-page";
import Home from "./pages/home/home-page";
import SistemasOperacionais from "./pages/sistemas-operacionais/sistemas-operacionais";
import LinguagensMe from "./pages/linguagens-me/linguagens-me-page";

const RouteApp = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element= { <Home/> } path="/" exact/>
                <Route element= { <RedesPage/> } path="/redes"/>
                <Route element= { <SistemasOperacionais/> } path="/sistemas-operacionais" />
                <Route element= { <LinguagensMe/> } path="/linguagens-me" />
            </Routes>
        </BrowserRouter>        
    );
}

export default RouteApp;