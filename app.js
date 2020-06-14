let express = require("express")
let app     = express()

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.get("/",(req,res)=>
{
    res.render("home")
})

app.get("/story",(req,res)=>
{
    res.render("index")
    console.log("Home page served")
})

let port = process.env.PORT || 3000;

app.listen(port, ()=>
{
    console.log(`Server started`)
})