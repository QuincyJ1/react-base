import logo from './logo.svg';
import './App.css';
import DogSquare from './Components/React-base-list/1uzdList';
import DogArray from './Components/React-base-list/2uzdList.jsx'



const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];


function App() {
//   return (
//     
//        {/* {
//         dogs.map((dog, index) => <DogSquare key={index}  dog={dog}/>)
//        } */}
  return (
    <div className="App">
     <header className="App-header">
    <div className="App">
      <DogArray dogs={dogs} />
    </div>
      </header>
    </div>
  );
}

export default App;
