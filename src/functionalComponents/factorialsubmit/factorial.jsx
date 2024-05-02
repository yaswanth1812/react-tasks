import React, { useState } from 'react';

const Factorial = () => {
  const [count, setCount] = useState(0);
  const [factorial, setFactorial] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const onChangeHandler = e => {
    e.preventDefault();

    let ans = 1;

    if (count === 0) {
      setFactorial(1);
      return;
    }

    for (let i = 2; i <= count; i++) {
      ans *= i;
    }

    setFactorial(ans);
  };

  return (
    <>
      <button onClick={increment}>Increment</button>
      <h1>The count is {count}</h1>
      <form onSubmit={onChangeHandler}>
        <input
          type="number"
          value={count}
          onChange={e => setCount(parseInt(e.target.value))}
          placeholder="Enter the number"
        />
        <br />
        <input type="submit" value="Calculate Factorial" />
      </form>
      <h2>The factorial of the given input is {factorial}</h2>
    </>
  );
};

export default Factorial;
