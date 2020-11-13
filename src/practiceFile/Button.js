import React from 'react'

function Button({ children, incrementCount }) {
    console.log("Redering Button", children)
    return (
        <button onClick={incrementCount} >
            {children}
        </button>
    )
}

export default React.memo(Button)
