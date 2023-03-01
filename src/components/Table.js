import React from "react";

function Table({ plates = [], money, handleMoneyChange, handleMoneySubmit, creditToMoney }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
      <form onSubmit={handleMoneySubmit}>
        <input onChange={handleMoneyChange} placeholder="refill your wallet!" value={creditToMoney}/>
        <button type="submit">Submit to add money!</button>
      </form>
    </>
  );
}

export default Table;
