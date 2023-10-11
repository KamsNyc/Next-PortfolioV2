// i want to import my depedencies #1
const express = require('express')

//create the express app #2
const app = express()






//start the server
let PORT = 8000
app.listen(PORT, () => {
    console.log(`backend running on ${PORT}`)
});