import './App.css';
import Title from './components/Title';
import BandList from './components/BandList';

function App() {
  return (
    <div className="App">
      <header>
        <Title/>
      </header>
      <BandList/>
    </div>
  );
}

export default App;
