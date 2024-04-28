import { Routes, Route } from 'react-router-dom';
import './App.css';
import Authors from './components/Authors';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/new" element={<Create />} />
        <Route path="/authors/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
