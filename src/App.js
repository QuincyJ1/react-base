import logo from './logo.svg';
import './App.css';
import Zuikis from './Components/1uzd.jsx'
import Props from './Components/2uzd';
import ZebraiBebrai from './Components/3uzd';
import Tekstas from './Components/4uzd';
import PenktasUzd from './Components/5uzd';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Zuikis />
      <Props text='Sveika, Meska' />
      <ZebraiBebrai number='1' />
      <Tekstas text1='4uzd h1' text2='4uzd h2' />
      <PenktasUzd txt1='5uzd h1' txt2='5uzd h2' clr='green'/>
      </header>
    </div>
  );
}

export default App;
