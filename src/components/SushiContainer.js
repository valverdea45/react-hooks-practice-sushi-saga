import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, eatenSushi, setEatenSushi, money, setMoney }) {

  const sushiPlates = sushis.map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} onEatenSushi={onEatenSushi} money={money} setMoney={setMoney} />
  })

  function onEatenSushi(sushi) {
    setEatenSushi([...eatenSushi, sushi])
  }

  // when user tries to eat sushi above budget nothing happens
  // condition: money cant afford
  // upon clicking if sushi.price is greater then money nothing hapns
  // money doesnt go negtive
  // 

  console.log(sushiPlates)

  const [ index1, setIndex1 ] = useState(0)
  const index2 = index1 + 4

  const sushiPlatesToBeDisplayed = sushiPlates.slice(index1, index2)

  function handleMoreClick() {
    setIndex1((index1) => index1 + 4)
  }

  return (
    <div className="belt">
      {sushiPlatesToBeDisplayed}
      <MoreButton handleMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
