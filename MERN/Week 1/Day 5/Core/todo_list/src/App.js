import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const iniInput = ""
  const [list, setList] = useState([
    {
      input: iniInput,
      checked: false
    }
  ])
  return (
    <div className="App">
      <Form setList={setList} list={list} />
      <Display list={list} setList={setList} />
    </div >
  );
}

export default App;

