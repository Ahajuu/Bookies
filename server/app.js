const express = require('express');
const graphqlHTTP =require('express-graphql');
const schema =require('./schema/schema');
const mongoose = require('mongoose');


const app = express();

//connect to mongo db

mongoose.connect('mongodb+srv://Raja:Gql12345@cluster0-noxge.mongodb.net/Cluster0?retryWrites=true&w=majority')
mongoose.connection.once('open',() =>{
    console.log('connected to db')
});
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () =>{
    console.log("connected at port 4000")
})