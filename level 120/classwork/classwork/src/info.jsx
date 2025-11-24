import Info from './react.jsx';

const Info = ({ signedIn, myName, mySurname }) => {
  return (
    <p>{signedIn ? myName : mySurname}</p>
  );
};

export default Info;