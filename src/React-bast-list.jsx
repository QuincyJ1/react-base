import logo from './logo.svg';
import './App.css';
import DogSquare from './Components/React-base-list/1uzdList';
import DogCircle from './Components/React-base-list/2uzdList';


const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* {
        dogs.map((dog, index) => <DogSquare key={index}  dog={dog}/>)
       } */}
        {
        dogs.map((dog, index) => <DogCircle key={index}  dog={dog}/>)
       
    }
       
       
      
      </header>
    </div>
  );
}

export default App;