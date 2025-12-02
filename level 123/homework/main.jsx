import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState();

  const handleClick1 = () => setCount(count + 1);
  const handleClick3 = () => setCount(count - 1);


  return (
    <div>
        <p style={{alignItems:"center", justifyContent : "center",marginBottom:"50px"}}>Counter App</p>
      <p style={{alignItems:"center", justifyContent : "center" }} >{count}</p>
      <button style={{alignItems:"center", justifyContent : "center", backgroundColor:"green",marginTop :"50px" }}  onClick={handleClick1}>Increment</button>
      <button style={{alignItems:"center", justifyContent : "center", backgroundcolor:"red", maginTop:"50px" }}  onClick={handleClick3}>Decrement</button>
    </div>
  );
};

export default Counter;