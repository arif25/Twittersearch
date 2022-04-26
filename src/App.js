import React from "react";
import Twittersearch from "./Components/TwitterSearch";
import './Components/styles/style.scss';
import Alnoor from './Components/Alnoor';

function App() {

  const mySetinterval = setInterval(()=>{
    myEvent()
  },5000);

  let myarr = [10, 12, 15];
  var arrmax= 0;
  for(let i=0;i<myarr.length;i++){   
    myarr[i] > arrmax;
    arrmax = myarr[i];
  }

  return (
    <div className="App">
      {/* <Twittersearch /> */}
      {/* <Alnoor /> */}

      <button type="button" onClick={myEvent}>text</button>
      



    </div>
  );
}

export default App;
