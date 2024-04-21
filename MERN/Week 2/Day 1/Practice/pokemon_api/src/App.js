
import './App.css';
import { useState } from 'react'



function App() {
  const [pokemon, setPokemon] = useState({ results: [] })


  const handleClick = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807")
      .then(response => {
        return response.json();
      }).then(secondResponse => {
        console.log(secondResponse);
        setPokemon(secondResponse)
      }).catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <div className="container mt-3">
        <button onClick={handleClick} type="button" className="btn btn-secondary">
          Fetch Pokemon
        </button>

        <table className='table'>
          <thead>
            <th><tr>Name</tr></th>
          </thead>
          <tbody>
            <tr>
              {pokemon.results.map((poke, index) => (
                <td className='list-group-item' key={index}>{poke.name}</td>
              ))}
            </tr>
          </tbody>
        </table>

      </div>

    </div >
  );
}

export default App;
