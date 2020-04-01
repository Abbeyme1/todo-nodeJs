const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static("public"));


let items = [];
let workItems = [];

app.get("/",function(req,res){

    

    res.render('list', {listTitle: date.getDate(), newListItems: items});
})


app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List", newListItems: workItems})
})


app.post("/",function(req,res){

    let item = req.body.newItem;
    if(req.body.list === "Work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
    res.redirect("/");
    }
    
})


app.listen(3000,function(){
    console.log("starting server");
})

