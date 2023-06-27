import { useState } from "react";

const useInput = (initial, required) => {
    const [value, setValue] = useState(initial);
    const [error, setError] = useState(null);

    return {
        value,
        onBlur: e => {
            if (!e.target.value && required) setError("Обязательно к заполнению!");
            else setError(null);
        },
        onChange: e => setValue(e.target.value),
        error
    };
};

export default useInput