import logo from './logo.svg';
import './App.css';
import DogSquare from './Components/React-base-list/1uzdList';


const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {
        dogs.map((dog, index) => <DogSquare key={index}  dog={dog}/>)
       }
      </header>
    </div>
  );
}

export default App;