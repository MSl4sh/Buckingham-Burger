require('dotenv-flow').config();

const { MESSAGE, NODE_ENV, PORT, DB_CONNECTION} = process.env;

console.log('Lancé en', NODE_ENV,":", MESSAGE);


const mongoose = require ('mongoose');

const express = require('express');

require('express-async-errors');

const router = require('./routes');
const app = express();
app.use(express.json());

app.use(async(req, res, next) => {
    
    await mongoose.connect(DB_CONNECTION);
    console.log("Connection réussie !");
    
    next();
})

app.use("/api", router)


app.listen(PORT, () => {
    console.log(`Server up on port:${PORT} [${NODE_ENV}]`);
})
