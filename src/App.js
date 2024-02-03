import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  const dropdownItems = ['Yes', 'Probably Not'];
  return (
    <div className="App">
      <h2>Should you use a Dropdown ?</h2>
      <Dropdown items={dropdownItems}/>
    </div>
  );
}

export default App;
