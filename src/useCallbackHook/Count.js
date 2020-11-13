import React from 'react'

function Count({ text, count}) {
    console.log(`Renndering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Count)
