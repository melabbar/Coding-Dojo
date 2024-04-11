import logo from './logo.svg';
import './App.css';
const handleClick = () => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
      // not the actual JSON response body but the entire HTTP response
      return response.json();
    }).then(response => {
      // we now run another promise to parse the HTTP response into usable JSON
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
}

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <button onClick={handleClick} type="button" className="btn btn-secondary">
          Fetch Pokemon
        </button>
      </div>
    </div>
  );
}

export default App;
