import React, { useState } from "react";

function Sushi({ sushi, onEatenSushi, money, setMoney }) {

  const [ isEaten, setIsEaten ] = useState(false)



  function handleEatClick() {
    
    if(sushi.price > money) {
      console.log("your out of money!!!")
     } else {
       setMoney((money) => money - sushi.price)
       setIsEaten(true)
       onEatenSushi(sushi)
     }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten  ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
