import { useEffect}from 'react';
import {useState} from "react"

const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('მონაცემები მიღებულია წარმატებით!');
    }, 1000);
  });
};

const App = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    getData().then((result) => {
      setData(result);
      console.log('კონსოლში:', result);
    });
  }, []);

  return (
    <div>
      <h2>მდგომარეობის მნიშვნელობა:</h2>
     <p>{data ? data : 'იტვირთება...'}</p>
    </div>
  );
};

export default App;