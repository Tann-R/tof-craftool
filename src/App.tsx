import React, { useState } from 'react';
import './App.css';
import {AvgCost} from './components/AvgCost';

const App = () => {
  let [costs,setCosts]=useState([0,0]);
  async function GetPricing() {
    await AvgCost().then((result)=>setCosts([Math.ceil(result), Math.ceil(result*0.75)]))
  }
  return (
    <main>
      <div className="img1"/>
      <div className="content">
        <h1>Troupe of Fate Craftool</h1>
        <h2>Calculate the average price per item for Rinascita gear on Cactuar</h2>
        <button onClick={()=>GetPricing()} className="ToFbutton">Update Prices</button><br/>
        <p>The average price per item on Rinascita gear on Cactuar is currently {costs[0]} gil.</p>
        <p>With your Troupe of Fate member discount, your cost per item comes to {costs[1]} gil.</p>
        <p>This means that, to buy a full set of Rinascita gear off the market board, you can expect to spend approximately {costs[0]*10} gil.</p>
        <p>By purchasing your Rinascita gear from your local Troupe of Fate crafter, your projected cost for a full set of gear is {costs[1]*10} gil.</p>
        <p>This is a savings of {(costs[0]*10)-(costs[1]*10)} gil on your gear set.</p>
        <p>Support your Troupe of Fate crafting friends today!</p>
      </div>
      <div className="img2"/>
    </main>
  )
}

export default App;
