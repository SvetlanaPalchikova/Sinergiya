import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

const App = () => {
    const [seconds, setSeconds] = useState(10)

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [seconds]);

    return (
        <div>
            <p >{seconds}</p>
        </div>
    );
}
export default App
