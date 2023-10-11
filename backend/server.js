//load env
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


//import dependencies
const express = require('express')
const connectToDb = require('./config/connectToDb');


//create app
const app = express()
connectToDb();


//routing
app.get('/', (req, res) => {
    res.json({hello: 'world'})
});



//start server

app.listen(process.env.PORT);