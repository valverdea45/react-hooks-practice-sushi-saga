import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [ sushis, setSushis ] = useState([])
  const [ eatenSushi, setEatenSushi ] = useState([])
  const [ money, setMoney ] = useState(100)
  const [ creditToMoney, setCreditToMoney ] = useState(0)

  useEffect(() => {
    fetch(API)
    .then((data) => data.json())
    .then((allSushis) => setSushis(allSushis))
  }, [])

  function handleMoneyChange(e) {
    setCreditToMoney(e.target.value)
  }


  function handleMoneySubmit(e) {
    e.preventDefault()
    const sum = money + parseInt(creditToMoney)
    setMoney(sum)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatenSushi={eatenSushi} setEatenSushi={setEatenSushi} money={money} setMoney={setMoney}/>
      <Table plates={eatenSushi} money={money} handleMoneyChange={handleMoneyChange} handleMoneySubmit={handleMoneySubmit} creditToMoney={creditToMoney} />
    </div>
  );
}

export default App;
