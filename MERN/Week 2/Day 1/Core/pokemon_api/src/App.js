
import './App.css';
import { useState } from 'react'
import axios from 'axios';



function App() {
  const [pokemon, setPokemon] = useState({ results: [] })


  const handleClick = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=807')
      .then(response => {
        console.log(response.data);
        setPokemon(response.data)
      }).catch((err) => {
        console.log(err)
      })
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
