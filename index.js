const express = require('express');
const categoryRoutes = require("./routes/categoryRoutes");
const itemRoutes = require("./routes/itemsRoutes")

const app = express();
const port=3000;

//In the context of a Node.js application using the Express.js framework, 
//app.use(express.json()) is middleware that is used to parse incoming 
//JSON data in the HTTP request body.
app.use(express.json());


app.use("/categories",categoryRoutes);
app.use("/items",itemRoutes);

app.listen(port,()=>{
    console.log(`App listening on prot ${port}`)
})