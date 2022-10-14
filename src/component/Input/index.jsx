import React from 'react'
import './styles.scss'

export const Input = ({ types, onChangeFunc, placeholder, changebleValue }) => {
    return (
        <>
            <input
                className='input'
                type = {types}
                min='3'
                onChange={(e) => onChangeFunc(changebleValue, e.target.value)}
                placeholder={placeholder}
            />
        </>
    )
}
