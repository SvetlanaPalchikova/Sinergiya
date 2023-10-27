import {Link} from "react-router-dom";
import React from "react";

const Header =() => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/friends'>Друзья</Link></li>
                <li><Link to='/events'>События</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header