// const http        = require("http");
const express = require('express');
const app     = express();
const port    = 3000;
const dataMember  = require("./members.js");
const dataUsers   = require("./users.js");
const moment      = require("moment");

//middleware
const log = (req, res, next) =>{
    console.log(`${moment().format("LLLL")} - ${req.ip} - ${req.originalurl}`)
    next();
};
app.use(log);

app.get("/", (req, res)=> res.send("Hello world"));

app.get("/about", (req, res)=> 
            res.json({
                    status: "success",
                    message: "response success",
                    description: "Exercise #03",
                    date:moment().format(),
                    data: dataMember,
            }
            ));

app.get("/users", (req, res)=>
            res.json(dataUsers)
)

app.get("/post/:id", (req, res)=> {
    res.send(`Artikel - ${req.params.id}`);
});

app.get("/foods", (req, res)=>{
    console.log(req.query);
    res.end()
});

app.listen(port, ()=>
    console.log(`Server running at http://localhost:${port}`)
)