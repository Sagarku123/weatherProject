const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.port || 3000;


const staticPath = path.join(__dirname, "../public");

const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set("view engine","hbs");
app.set('views',template_path);

hbs.registerPartials(partials_path)

app.use(express.static(staticPath));
// app.use(express.static(staticPath));
app.get('',(req,res)=>{
    res.render("index");
});

app.get('/about',(req,res)=>{
    res.render("about-us");
});

app.get('/weather',(req,res)=>{
    res.render("weather");
});

app.get('contact-us',(req,res)=>{
    res.send("welcome to Contact-Us page");
});

app.get('*',(req,res)=>{
    res.render("404error");
});

app.listen(port,()=>{
    console.log("server connected");
})

