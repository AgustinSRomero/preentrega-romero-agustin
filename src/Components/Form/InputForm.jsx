import React from 'react';

function InputForm(props) {
    const { name, value, label, onChange} = props

    return (
        <div className='input-container'>
            <label>
                {label}*:
                <input type="text" name={name} onChange={onChange} value={value} required/>
            </label>
        </div>
    )
}

export default InputForm