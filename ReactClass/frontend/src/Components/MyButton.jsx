import React from 'react'
import '../style.css'


const MyButton = ({ text, color, ved, handleclick }) => {
    return (
        <>
            <button style={{ backgroundColor: color, float: ved }}
                onClick={handleclick}>{text}</button>
        </>
    )
}

export default MyButton;
