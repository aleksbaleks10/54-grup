// const {createServer} = require("http")
 
// const server = createServer((req , res) => {
//     const res = {
//         method : req.method
//         path : req.url
//     })
    
// }



const {createServer} = require("http")
    const querystring  = require("querystring")
    const server = createServer((req, res) => {
        const URL = new URL("http://localhost:3000" + req.url);
        console.log(URL);

        const myOBJ = querystring .perse(URL.search.slice(1));
        console.log(myOBJ)


    })