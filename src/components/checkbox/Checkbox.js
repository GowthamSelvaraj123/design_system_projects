import React, { useState } from 'react';
import '../checkbox/Checkbox.css';

export default function Checkbox({inputStateValue, inputText, inputValue}) {
  const [booleanValue, setBooleanValue] = useState(inputStateValue);
  const changeChecked = () => {
  setBooleanValue((booleanValue) => !booleanValue) }
  return (
    <div className='checkbox-wrap'>
        <div className="checkbox-container" style={{textTransform:'capitalize'}} currentState={inputStateValue} onClick={changeChecked} >
            <input type='checkbox' value={inputText.toLowerCase()} checked={booleanValue} name={inputText.toLowerCase()} title={inputText.toLowerCase()} />
            <label htmlFor={`radio-${inputText.toLowerCase()}`} className="custom-checkbox"></label>
            <span>{inputText}</span>
        </div>
    </div>
  )
}
