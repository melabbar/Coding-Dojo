import './App.css';
import Tabs from "./components/Tabs"
import Display from "./components/Display";

import { useState } from 'react';

function App() {
  const [tabs, setTabs] = useState([
    { label: "Tab 1", content: "Tab 1 is the beginning" },
    { label: "Tab 2", content: "Tab 2 is the middle" },
    { label: "Tab 3", content: "Tab 3 is the end" }
  ])

  const [currentTab, setCurrentTab] = useState(0)


  return (
    <div className="App">
      <Tabs tabs={tabs} setCurrentTab={setCurrentTab} />
      <Display tabs={tabs} currentTab={currentTab} />
    </div>
  );
}

export default App;
