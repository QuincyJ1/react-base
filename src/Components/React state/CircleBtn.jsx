import { useState } from 'react';
import Random from './Random.jsx';

function CircleBtn() {
    const [sq, setSq] = useState(true);

   const shape = () => {
    setSq(!sq)
   };
     return (
     <div>
      <div className={sq ? 'square' : 'circle'} ></div>
      <button className='red' onClick={shape}>Different shape</button>
     </div>
     )
      }

export default CircleBtn;