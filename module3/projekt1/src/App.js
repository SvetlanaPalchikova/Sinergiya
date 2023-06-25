import React from "react";
import s from "./App.module.css";

function App() {
    return (
        <div className={s.container}>
            <div className={s.div}><h1>Pегистрация</h1>
                <form>
                    <div >
                        <label>Имя: </label>
                        <input type="text" className={s.input}/>
                    </div>
                    <div >
                        <label>Фамилия: </label>
                        <input type="text" className={s.input}/>
                    </div>
                    <div >
                        <label>Отчество: </label>
                        <input type="text" className={s.input}/>
                    </div>
                    <div >
                        <label>Дата рождения: </label>
                        <input type="date" className={s.input}/>
                    </div>
                    <div className={s.input}>
                        <label>пол: </label>
                        <label>жен</label>
                        <input
                            type="radio"
                            name="gender"
                        />
                        <label>муж</label>
                        <input
                            type="radio"
                            name="gender"
                        /></div>
                    <div className={s.container} >
                        <input type="submit" className={s.input_submit}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
