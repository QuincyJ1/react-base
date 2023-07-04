import logo from './logo.svg';
import './App.css';
import DogSquare from './Components/React-base-list/1uzdList';
import DogArray from './Components/React-base-list/2uzdList.jsx'
import EvenDogs from './Components/React-base-list/3uzdList';



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
  {/* //   <div className="App">
  //     <DogArray dogs={dogs} />
    </div> */}
 <div className="App">
      <EvenDogs dogs={dogs} />
    </div>
       </header>
        </div>
  );
}

export default App;
