// import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const handleClick1 = () => setCount(count + 2);
//   const handleClick2 = () => setCount(0);

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={handleClick1}>+2</button>
//       <button onClick={handleClick2}>reset to 0</button>
//     </div>
//   );
// };

// export default Counter;



import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick1 = () => setCount(count + 2);
  const handleClick2 = () => setCount(0);
  const handleClick3 = () => setCount(count - 2);

  const TrueorFalse1 = count > 10
  const TrueorFalse2 = count < -10 

  return (
    <div>
      <p>{count}</p>
      <button disabled={TrueorFalse1} onClick={handleClick1}>+2</button>
      <button onClick={handleClick2}>reset to 0</button>
      <button disabled={TrueorFalse2}onClick={handleClick3}>-2</button>
    </div>
  );
};

export default Counter;