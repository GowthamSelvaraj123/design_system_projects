import React, { useState } from 'react';
import '../radio/Radio.css';

export default function Radio({ inputStateValue, inputText, inputValue }) {
  const [booleanValue, setBooleanValue] = useState(inputStateValue);

  const changeChecked = () => {
    setBooleanValue((prevValue) => !prevValue);
  };

  return (
    <div className='radio-wrap'>
      <div className="radio-container" style={{ textTransform: 'capitalize' }}  onClick={changeChecked} >
        <input type="radio" value={inputValue} checked={booleanValue} name={inputText.toLowerCase()} title={inputText.toLowerCase()} id={`radio-${inputText.toLowerCase()}`} onChange={changeChecked} />
        <label htmlFor={`radio-${inputText.toLowerCase()}`} className="custom-radio"></label>
        <span>{inputText}</span>
      </div>
    </div>
  );
}
