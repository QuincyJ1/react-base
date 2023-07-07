import { useState } from 'react';


function PlusPlus () {
    const [plus, setPlus] = useState(0)
    
    const plusOne = () => {
        setPlus(_ => plus + 1)
    }

    const minusThree = () => {
        setPlus(_ => plus - 3)
    }
    return (
        <div>
            <button onClick={plusOne} className='red'>+</button>
            <button onClick={minusThree} className='red'>-</button>
            <div>{plus}</div>
        </div>
    )
}

export default PlusPlus;