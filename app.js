const express = require("express");
const app = express();
const usermodel = require("../model/user")
app.use(express.json());
// const { request, response } = require("express");

const indexcontrolller = require("./controller/index");


app.use("/rejo",usermodel.User);



app.use("/name", indexcontrolller.getuser); 
app.get ("/",(request,response)=>{
    return response.send("hgehcebvcv")
});



module.exports = app;



a= 3
b = 4
console.log(a+b)