import React from 'react';

import './inputnumber.css'
function InputNumber({ defaultValue = 1, minimalValue, onClick, value, onInputChange }) {
    return (
        <div className='number-input'>
            <button
                onClick={() => {value > minimalValue && onInputChange(value - 1) }} >
            </button>
            <input
                type='number'
                value={value ?? defaultValue}
                id='inputvalue'
                onChange={(e) => onInputChange(e.target.value)} >
            </input>
            <button
                onClick={() => onInputChange(value + 1)}
                className='plus'>
            </button>
        </div>
    )
}

export default InputNumber;