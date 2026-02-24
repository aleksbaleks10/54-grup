const http = require("http")

const server = http.createserver((req, res) => {
    console.log(req)
})
server.listen(3000, () => console.log("you are now on port:3000"))