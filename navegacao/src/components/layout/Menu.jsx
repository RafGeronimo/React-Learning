import React from "react";
import "./Menu.css"
import {Link} from "react-router-dom"

const Menu = (props) => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                        <Link to="/Param/123 - parâmetro numérico">Param 01</Link>
                    </li>
                    <li>
                        <Link to="/Param/Legal - parâmetro em texto">Param 02</Link>
                    </li>
                    <li>
                        <Link to="/About">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/naoExiste">Não existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu