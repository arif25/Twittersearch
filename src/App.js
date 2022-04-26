import React from "react";
import Twittersearch from "./Components/TwitterSearch";
import './Components/styles/style.scss';
import Alnoor from './Components/Alnoor';

function App() {

  const mySetinterval = setInterval(()=>{
    myEvent()
  },5000);

  return (
    <div className="App">
      {/* <Twittersearch /> */}
      {/* <Alnoor /> */}

      <button type="button" onClick={myEvent}>text</button>

    </div>
  );
}

export default App;
