fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then (response => response.json())
      .then(resolved => console.log(resolved))
      .catch(rejected => console.log(rejected))

  fetch('https://goa-api.onrender.com/leaders')
        .then(res => res .json())
        .catch(result => console.log(result))