import logo from './logo.svg';
import './App.scss';
import DogSquare from './Components/React-base-list/1uzdList';
import DogArray from './Components/React-base-list/2uzdList.jsx'
import EvenDogs from './Components/React-base-list/3uzdList';
import Dogs4 from './Components/React-base-list/4uzdList';



// const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];


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
 {/* <div className="App">
      <EvenDogs dogs={dogs} />
    </div> */}
    <Dogs4 />
       </header>
        </div>
  );
}

export default App;
