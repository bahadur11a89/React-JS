import React from 'react'

const Usechild = React.memo(({ handleClick }) => {
    console.log("Child rendered")

    return (
        <button onClick={handleClick}>
            Click Button
        </button>
    )
})

export default Usechild