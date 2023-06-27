import React from "react";
import s from "./App.module.css";
import useInput from './UseInput.js'

function App() {
    const name = useInput('', true)
    return (
        <div className={s.container}>
            <div className={s.div}><h1>Pегистрация</h1>
                <form>
                    <div >
                        <label>Имя: </label>
                        <input {...name} type="text" className={s.input}/>
                     {name.error && <span style={{ color: 'red'}}>{name.error}</span>}
                    </div>
                    <div >
                        <label>Фамилия: </label>
                         <input {...name}  type="text" className={s.input}/>
                        {name.error && <span style={{ color: 'red'}}>{name.error}</span>}
                    </div>
                    <div >
                        <label>Отчество: </label>
                        <input  {...name} type="text" className={s.input}/>
                     {name.error && <span style={{ color: 'red'}}>{name.error}</span>}
                    </div>
                    <div >
                        <label>Дата рождения: </label>
                        <input {...name} type="date" className={s.input}/>
                     {name.error && <span style={{ color: 'red'}}>{name.error}</span>}
                    </div>
                    <div className={s.input}>
                        <label>пол: </label>
                        <label>жен</label>
                        <input type="radio" name="gender"
                        />
                        <label>муж</label>
                        <input type="radio" name="gender"
                        />
                    </div>
                    <div className={s.container} >
                        <input type="submit" className={s.input_submit}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
