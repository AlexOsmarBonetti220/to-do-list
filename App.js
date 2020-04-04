const express = require("express");

const app = express();
//Criando rota
app.get("/", (req, res)=>{
    res.send("<h1>Minha primeira rota</h1>");
})
//Rota que devolve um json
app.get("/json", (req, res)=>{
    res.json({
        names:[
            {name:"Alex"},
            {name:"Alan"},
            {name:"Carlos"},
        ]
    });
})
//Colocando o ouvinte na porta
app.listen(3000, ()=>{
    console.log("Iniciou o server :) !");
})