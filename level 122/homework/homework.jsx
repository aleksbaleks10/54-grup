import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick1 = () => setCount(count + 1);
  const handleClick2 = () => setCount(0);
  const handleClick3 = () => setCount(count - 1);


  return (
    <div>
      <p>{count}</p>
      <button disabled={TrueorFalse1} onClick={handleClick1}>+1</button>
      <button onClick={handleClick2}>reset to 0</button>
      <button disabled={TrueorFalse2}onClick={handleClick3}>-1</button>
    </div>
  );
};

export default Counter;