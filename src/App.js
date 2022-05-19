import logo from './logo.svg';
import './App.css';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Emmanuel Salazar
        </p>
        <Menu></Menu>
      </header>
    </div>
  );
}

export default App;
