import './App.css';
import React, {useEffect, useState} from "react";

function App() {
    const[count, setCount]= useState(0);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };
    return (
    <div >
        <p>{date.toLocaleString('en', options)}</p>
        <p>{date.toLocaleString('ru', options)}</p>
      <p>Счётчик:{count} </p>
        <button onClick={()=> setCount(count+1)}>Добавить</button>
        <button onClick={()=> setCount(count-1)}>Уменьшить</button>
    </div>
  );
}

export default App;
