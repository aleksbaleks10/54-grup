function App() {
  const handleClick = () => {
    alert("button clicked");
  };

  return (
    <div>
      <Hello name="aleks" />
      <HelloButton onClick={handleClick} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));