import React, {useState, useEffect} from 'react';
import './App.css';
import {AvgCost} from './components/AvgCost';

let prices=[0,0];

async function GetPricing() {
  let [costs,setCosts]=useState([0,0]);
  await AvgCost().then((result) => setCosts([result, (result*0.8)]));
  prices=costs;
}

const App = () => {
  GetPricing();
  return (
    <main>
      <div>
        The average price per item on Rinascita gear on Cactuar is currently {prices[0]} gil.<br/>
        With your Troupe of Fate member discount, your cost per item comes to {prices[1]} gil.
      </div>
    </main>
  )
}

export default App;
