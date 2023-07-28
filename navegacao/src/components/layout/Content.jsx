import React from "react";
import "./Content.css"

import { Routes, Route } from "react-router-dom";

import Home from "../../views/exemples/Home"
import About from "../../views/exemples/About"
import Param from "../../views/exemples/Param"
import NotFound from "../../views/exemples/NotFound"

const Content = (props) => {
    return (
        <main className="Content">
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/Param/:id" element={<Param/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </main>
    )
}

export default Content