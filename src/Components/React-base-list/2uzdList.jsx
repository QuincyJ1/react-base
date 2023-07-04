
const DogCircle = ({ name, index }) => (
    <div style={{
        border: '1px solid green',
        padding: '40px 20px',
        marginTop: '20px',
        borderRadius: '50%'
    }} className="dog-circle">
      <span className="dog-name">{name}</span>
    </div>
  );
  
  const DogArray = ({ dogs }) => {
    const sortedDogs = dogs.sort((a, b) => b.length - a.length);
  
    return (
      <div className="dog-array">
        {sortedDogs.map((dog, index) => (
          <DogCircle key={index} name={dog} index={index + 1} />
        ))}
      </div>
    );
  };
  
  export default DogArray;