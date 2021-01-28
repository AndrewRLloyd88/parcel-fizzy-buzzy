import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <div>
        <div className="countArea">
          <button onClick={handleDecrement}>-</button>
          <h1>{count}</h1>
          <button onClick={handleIncrement}>+</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
        <div className="fizzBuzz">
          {count % 3 === 0 && count % 5 === 0 ? (
            <h2 className="fb">FizzBuzz</h2>
          ) : count % 3 === 0 ? (
            <h2 className="f">Fizz</h2>
          ) : count % 5 === 0 ? (
            <h2 className="b">Buzz</h2>
          ) : null}
        </div>
      </div>
    </div>
  );
}
