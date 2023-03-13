import {Routes, Route} from "react-router-dom"
import Header from "../header/header";
import React from "react";
import Home from "../pages/home/home";
import Characters from "../pages/characters/characters";
import NotFound from "../pages/not-found/not-found";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/characters" element={<Characters/>}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    );
}

export default App;
