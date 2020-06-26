const express = require('express');
const expressGraphQL = require('express-graphql');
const graphql = require('graphql');
const schema =  require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb://mongodb:27017/weather',{useNewUrlParser:true});

mongoose.connection.once('open',()=>{
    console.log('connected to database');
})


app.use(cors({
    origin: '*'
}));
app.use('/graphql',expressGraphQL({
    schema,
    graphiql:true
}))


app.listen(8080,'0.0.0.0');
