// const randomValue = Math.random();

// const myList = (
//   <ul>
//     {randomValue > 0.5 && <li>1st element</li>}
//     <li>{randomValue > 0.5 ? "hello" : "bye!!!!!!!!!"}</li>
//   </ul>
// );

// export default myList;

//  import React from "react";

export default function InterestsList() {
  const interests = [
    "history of all time",
    "kosmos",
    "anime",
    "cats",
    "dogs"
  ];

  return (
    <ul>
      {interests.map((interest, index) => (
        <li key={index}>{interest}</li>
      ))}
    </ul>
  );
}
