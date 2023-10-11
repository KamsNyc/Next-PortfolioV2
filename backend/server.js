//load env
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


//import dependencies
const express = require('express')
const connectToDb = require('./config/connectToDb');
const Review = require('./models/reviewModel');


//create app
const app = express()
connectToDb();

//config express
app.use(express.json());


//routing
app.get('/', (req, res) => {
    res.json({hello: 'world'})
});

app.post('/reviews', async (req, res) => {
    //get sent in data off request body
    const title = req.body.title
    const createdAt = req.body.title
    const link = req.body.title
    const isStar = req.body.title
    //create a review

    const review = await Review.create({
        title: title,
        createdAt: createdAt,
        link: link,
        isStar: isStar,
    })



    //respond with the new review
    res.json
} )



//start server

app.listen(process.env.PORT);