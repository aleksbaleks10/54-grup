// 2)
const moviesFunc = async () => {
  const movies = await fetch("https://yts.mx/api/v2/list_movies.json")
  const resolved = await movies.json();
  for (let movie of resolved.data.movies){
    console.log(movie)
    console.log("")
  }
}

moviesFunc()
// 3)
const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const Data = res.json()
    console.log(Data)
}

getData()