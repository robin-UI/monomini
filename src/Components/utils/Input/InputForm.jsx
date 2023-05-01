import './inputForm.css'
import React, { useState } from 'react'

const InputForm = ({ label, errorMessage, onChange, id, ...inputProps } ) => {

    const [focused, setFocused] = useState(false);
  
    const handleFocus = (e) => {
      setFocused(true);
    };
  
    return (
        <div>
            <label>{label}</label>
            <input
                className='mb-3 md:mb-4 p-1 sm:p-3 lg:p-4 rounded-[7px] md:rounded-[11px] border-2 border-black'
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default InputForm