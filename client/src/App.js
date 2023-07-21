import './App.css';

const base = process.env.REACT_APP_BASE_URL;

function App() {
  console.log('hello', base);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <h1>{base}</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
