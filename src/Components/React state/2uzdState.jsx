import Random from './Random.jsx';
import { useState } from 'react';


function CircleBtn2() {
   

      
    const  [sq, setSq] = useState(true);
    const [number, setNumber] = useState(Random(5, 25));

   
    const randomNumber = () => {
        setNumber(Random(5, 25))
    }
   const shape = () => {
    setSq(!sq)
   };
     return (
     <div>
      <div className={sq ? 'square' : 'circle'} style={{
        fontSize: '20px',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>{number}</div>
      <button className='red' onClick={randomNumber}>Random Number</button>
      <button className='red' onClick={shape}>Different shape</button>
     </div>
     )
      }

export default CircleBtn2;