import axios from 'axios'

// Async-Await
// Async/Await makes it easier to write promises. The keyword 'async' before a function makes the function return a promise, always. 
// And the keyword await is used inside async functions, which makes the program wait until the Promise resolves.

const getData=async(url)=>{
    let res=await axios.get(url);
    console.log(res.data);
}

getData("https://jsonplaceholder.typicode.com/users");