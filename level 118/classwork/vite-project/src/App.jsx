import './App.css'
function App(){
      const handleSubmit = e => {

      e.preventDefault();
      
    const result = {

      name: e.target.name.value,

    }
    console.log(result)
    }
    return(
      <div>
        <form onSubmit = {handleSubmit}>
            <input type="text" placeholder="Enter name" name="name" required /> <br /> <br />
            
        </form>
      </div>

    )

}
export default App;