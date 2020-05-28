var promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => { return response.json() })
    .then((json) => {return console.log(json) })