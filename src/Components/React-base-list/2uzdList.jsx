

function DogCircle ({dog}) {
return    ( 
    <div style={{
        border: '1px solid red',
        padding: '10px 10px',
        marginTop: '20px',
        borderRadius: '50%',
    }}>
        <p>{dog}</p>
    </div>)
}

export default DogCircle;