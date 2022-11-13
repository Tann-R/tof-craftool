import React from 'react';
import './App.css';
import {AvgCost} from './components/AvgCost';

function getCost() : Promise<number> {
  return new Promise((resolve, reject) => {
    let cost : number =   Number(AvgCost);
    resolve(cost);
  });
}

async function App() {
  let cost=await getCost();
  let discountedCost=cost*.8;
  return (
    <main>
      <div>
        The average price per item on Rinascita gear on Cactuar is currently {cost} gil.<br/>
        With your Troupe of Fate member discount, your cost per item comes to {discountedCost} gil.
      </div>
    </main>
  )
}

export default App;
