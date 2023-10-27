import {Route, Routes} from "react-router";
import AllFriends from "./AllFriends"
import React from "react";
import {Link} from "react-router-dom";

export const Home = () => (
    <div>
        <h1>Добро пожаловать на сайт!</h1>
    </div>
)

 export const Friends = () => (
    <div>
        <Routes>
            <Route path='' element={<AllFriends/>}/>
        </Routes>
    </div>
)

 export const Events = () => (
    <div>
        <ul>
            <li><Link to = "" >Мой день рождения</Link></li>
            <li><Link to = "">Поездка в театр</Link></li>
            <li><Link to = "">Турпоход на водопады</Link></li>
        </ul>
    </div>
 )