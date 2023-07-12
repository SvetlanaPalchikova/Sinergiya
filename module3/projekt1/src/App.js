import React, { useState} from "react";
import Form from "./Form.js"

function App() {
const [show, setShow] = useState(false)

    return(
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? 'Скрыть' : 'Зарегистрироваться'}
            </button>
            {show && <Form/>}
        </div>
    )

}

export default App;
