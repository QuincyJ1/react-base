function EvenDogs ({dogs}) {
    
        return (
          <div>
            {dogs.map((dog, index) => {
              if (index % 2 === 0) {
                return (
                  <div style={{
                    border: '1px solid green',
                    padding: '30px',
                    marginTop: '30px'
                    }} key={index} className="square">
                    {dog}
                  </div>
                );
              } else {
                return (
                  <div style={{
                    padding: '60px',
                    border: '1px solid red',
                    borderRadius: '50%',
                    marginTop: '30px',
                  }} key={index} className="circle">
                    {dog}
                  </div>
                );
              }
            })}
          </div>
        );
      };

      export default EvenDogs;