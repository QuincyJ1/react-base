import { useState } from 'react';

function CircleBtn() {
    const [circle, setCircle] = useState(false);
    

    const shape = () => {
        setCircle(prevState => !prevState);
      };
     
   
      return (
        <div>
          <h1>{circle ? 'circle' : 'square'}</h1>
          <div className={circle ? 'circle' : 'square'}></div>
          <button className="red" onClick={shape}>
            {circle ? 'Square' : 'Circle'}
          </button>
        </div>
      );
      }

export default CircleBtn;