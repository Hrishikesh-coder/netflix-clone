import logo from './logo.svg';
import './App.css';
import Row from './Row'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Hello Hrishikesh!</h1>
      <Row title="NETFLIX ORIGINALS"/>
      <Row title="Trending Now"/>

    </div>
  );
}

export default App;
