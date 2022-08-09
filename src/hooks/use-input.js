import { useState } from "react";

const useInput = (validateValue, validationType)=> {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(validationType, value)
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (e) => {
        setValue(e.target.value);
        setIsTouched(true);
    }

    const InputBlurHandler = (e) => {
        setIsTouched(true);
    }

    const reset = () => {
        setValue('');
        setIsTouched(false);
    }

    return {
        value,
        valueChangeHandler,
        InputBlurHandler,
        hasError,
        reset,
        valueIsValid
    }
}

export default useInput;