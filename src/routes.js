import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import  "./pages/Home/Home"
import Musicas from "./pages/Music/Musicas"
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Adicionar from "./pages/Adicionar/Adicionar";
import Editar from "./pages/Editar/Editar";

function Rotas() {
    return (
        <>
         <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/Musicas" element = {<Musicas/>}/>
                <Route path="/Adicionar" element = {<Adicionar/>}/>
                <Route path="/editar/:idCard" element = {<Editar/>}/>
                <Route path="*" element = {<NotFound/>}/>
            </Routes>
         </BrowserRouter>
        </>
    )
}

export default Rotas;