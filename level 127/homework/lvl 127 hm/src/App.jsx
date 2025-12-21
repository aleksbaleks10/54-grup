import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const getRandomColor = () => {
    const colorHexes = [ 
      "#ff5733",
      "#33ff57", 
      "#3357ff",
      "#f1c40f", 
      "#8e44ad",
      "#e74c3c"
    ];

    const result = colorHexes[Math.floor(Math.random() * colorHexes.length)];
    return result;
  };

  const getData = async (apiLink) => {
    try {
      const res = await fetch(apiLink);
      const final = await res.json();
      setUsers(final);
      setErr(false);
      setErrMessage("");
    } catch (error) {
      setErr(true);
      setErrMessage(error);
    }
  };

  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/users");
  }, []);

  if (err === true) {
    return <p>Error: {errMessage}</p>;
  }

  if (users.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <ul style={{"width": "100vw", "height": "100vh", "display": "flex", "flexDirection": "column", "justifyContent": "center", "textAlign": "left", "paddingLeft": "35px", "backgroundColor": "#12344e"}}>
      {
        users.map((user, i) => (
          <li key={i} style={{
            margin: "20px",
            listStyle: "none",
            color: getRandomColor()
          }}>
            <h2><b>Name:</b> {user.name}</h2>
            <i><b>Email:</b> {user.email}</i>
          </li>
        ))
      }
    </ul>
  );
};

export default App;