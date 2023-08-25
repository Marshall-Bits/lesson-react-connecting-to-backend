# Connect react to the backend

In this lesson we've learned how to connect our react app to the backend. 

- Remember to do the api calls in the useEffect hook, so the data is fetched when the component is mounted.

- You can use try/catch with async/await to handle asynchronous code or then/catch.

- To call the api you can use the fetch function or axios.

## Axios

Axios is a library that allows us to make http requests from the browser. It is a promise based library, so we can use async/await or then/catch to handle the asynchronous code.

To install axios run:

```bash
npm install axios
```

To use axios we need to import it:

```js
import axios from 'axios'
```

To make a get request we can use the get method:

```js
axios.get('http://localhost:3001/notes')
```

The get method returns a promise, so we can use then/catch to handle the asynchronous code:

```js
axios.get('http://localhost:3001/notes')
    .then(response => {
    const notes = response.data
    console.log(notes)
})
```

We need to use the data property of the response object to get the data from the server.

## Fetch

Fetch is a browser API that allows us to make http requests from the browser. It is a promise based API, so we can use async/await or then/catch to handle the asynchronous code.

To make a get request we can use the fetch function:

```js
fetch('http://localhost:3001/notes')
```

The fetch function returns a promise, so we can use then/catch to handle the asynchronous code:

```js
fetch('http://localhost:3001/notes')
    .then(response => response.json())
    .then(data => console.log(data))
```

We need to use the json method of the response object to get the data from the server.

## Post request with axios

To make a post request with axios we can use the post method:

```js
axios.post('http://localhost:3001/notes', newNote)
```

The post method returns a promise, so we can use then/catch to handle the asynchronous code:

```js
axios.post('http://localhost:3001/notes', newNote)
    .then(response => {
    const notes = response.data
    console.log(notes)
})
```

We need to use the data property of the response object to get the data from the server.

## Post request with fetch

To make a post request with fetch we need to pass an object as the second parameter of the fetch function:

```js
fetch('http://localhost:3001/notes', {
    method: 'POST',
    body: JSON.stringify(newNote),
    headers: {
        'Content-Type': 'application/json'
    }
})
```

The fetch function returns a promise, so we can use then/catch to handle the asynchronous code:

```js

fetch('http://localhost:3001/notes', {
    method: 'POST',
    body: JSON.stringify(newNote),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
```


