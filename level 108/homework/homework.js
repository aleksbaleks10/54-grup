fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res .json())
      .then(json => console.log(json))

  fetch('https://goa-api.onrender.com/leaders')
        .then(res => res .json())
        .catch(result => console.log(result))