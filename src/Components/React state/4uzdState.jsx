import { useState } from 'react';

function Add () {

const [add, setAdd] = useState([]);

const addSquare = () => {
    setAdd([...add, 1])
}
    return (
        <>
        
        <div className='sq-bin'>
            {add.map((s, i) => (
                <div key={i} className='square'></div>
            ))}
        </div>

        <button onClick={addSquare}>Add</button>

        </>
    )
}

export default Add