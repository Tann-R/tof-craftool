import React from 'react';
import './App.css';
import {AvgCost} from './components/AvgCost';

function App() {
  let cost=AvgCost()
  return (
    <div className="App">
      <header>
        <h1>
          Testing Header.
        </h1>
      </header>
      <main>
        The average price for high quality Rinascita gear on Cactuar right now is some amount of gil that this doesn't want to let me display from a variable for some mysterious reason per item.
      </main>
    </div>
  )
}

export default App;
