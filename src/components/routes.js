import { BrowserRouter, Routes, Route } from "react-router-dom";
import RedesPage from "./pages/redes/redes-page";
import Home from "./pages/home/home-page";

const RouteApp = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element= { <Home/> } path="/" exact/>
                <Route element= { <RedesPage/> } path="/redes"/>
            </Routes>
        </BrowserRouter>        
    );
}

export default RouteApp;