import {Route, Routes} from "react-router";
import {Home, Friends, Events} from "./RouteComponents"
import React from "react";

const Main =() => (
    <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/friends/*' element={<Friends/>}/>
            <Route path='events' element={<Events/>}/>
        </Routes>
    </main>
)

export default Main