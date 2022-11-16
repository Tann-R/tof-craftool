import React, { useState } from 'react';
import './App.css';
import {AvgCost} from './components/AvgCost';

const App = () => {
  let [costs,setCosts]=useState([0,0]);
  let [theme, setTheme]=useState(false);
  let style;
  async function GetPricing() {
    await AvgCost().then((result)=>setCosts([Math.ceil(result), Math.ceil(result*0.75)]))
  }
  let changeTheme=()=>{
    setTheme(theme?false:true);
  }

  if (theme) {
    style= `
    :root {
      --background: #222228;
      --acc1: #aaaaae;
      --acc2: #ccccce;
      --buttonBg: #101018;
      --buttonAcc1: #000;
      --buttonAcc2: #29295d;
      --grad: rgba(150, 150, 175, 1) 0%, rgba(250, 250, 275, 1) 50%, rgba(150, 150, 175, 1) 100%;
    }`
  }
  else {
    style=`
    :root {
      --background: #ccccce;
      --acc1: #101018;
      --acc2: #222228;
      --buttonBg: #aaaaae;
      --buttonAcc1: #88888a;
      --buttonAcc2: #666668;
      --grad: rgba(16, 16, 24, 1) 0%, rgba(34, 34, 40, 1) 50%, rgba(16, 16, 24, 1) 100%;
    }`
  }

  return (
      <body>
        <style>{style}</style>
        <main>
          <div className="img1"/>
          <div className="content">
            <h1>Troupe of Fate Craftool</h1>
            <h2>Calculate the average price per item for Rinascita gear on Cactuar</h2>
            <button onClick={()=>GetPricing()} className="ToFbutton">Update Prices</button><br/>
            <p>The average price per item on Rinascita gear on Cactuar is currently {costs[0]} gil, or {costs[0] * 10} gil per set.  
            With the 25% Troupe of Fate member discount, the cost per item comes to {costs[1]} gil, or {costs[1] * 10} gil per set.</p>
            <p>By purchasing Rinascita gear from a Troupe of Fate crafter, members may currently enjoy a savings 
              of {(costs[0]*10)-(costs[1]*10)} gil on a full gear set.</p>
            <p>Support your Troupe of Fate crafting friends today!</p>
            <button onClick={()=>changeTheme()} className="ToFbutton">{theme?"Enable Light Theme":"Enable Dark Theme"}</button><br/>
          </div>
          <div className="img2"/>
        </main>
      </body>
  )
}

export default App;
