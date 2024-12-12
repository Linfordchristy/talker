import express from "express";
import bodyParser from "body-parser";

const port="3000";
const app=express();
var blogTitles=[];
let blogData={};

var usern=[];
var userpass={};

var uName="chris";
var pass="chris2404"
var userName="";
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) =>{
    res.render("login.ejs",{checker:"pass"});
});

app.get("/regis", (req,res) =>{
    res.render("registration.ejs",{checker:"avail"});
});

app.post("/home", (req,res) =>{
    userName=req.body["uname"];
    if(usern.indexOf(userName)!= -1){
        if(req.body["pass"]==userpass[userName]){
            res.render("home.ejs",{uRL:req.url,blogData,blogTitles,userName});
        }
        else{
            res.render("login.ejs",{checker:"wrong_pass"});
        }
    }
    else{
        res.render("login.ejs",{checker:"noUname"});
    }
});

app.post("/homes", (req,res) =>{
    userName=req.body["name"];
    if (usern.indexOf(userName)== -1 ) {
        if(req.body["password"]==req.body["confirm_password"]){
            usern.push(userName);
            userpass[userName]=req.body["password"];
            res.render("home.ejs",{uRL:req.url,blogData,blogTitles,userName});
        }
        else{
            res.render("registration.ejs",{checker:"pass_mismatch"});
        }
    }
    else{
        res.render("registration.ejs",{checker:"uname_N_avail"});
    }
});

app.get("/blogger", (req,res) =>{
    res.render("blogger.ejs");
});

app.post("/blogs", (req,res) =>{
        var blogEntry=req.body;
        blogTitles.push(req.body["title"]);
        blogData[req.body["title"]]=req.body["blogEnteredData"];
        res.render("blogs.ejs",{title:req.body["title"],blogData});
        console.log(blogData);
});

app.get("/home", (req,res) =>{
        res.render("home.ejs",{uRL:req.url,blogData,blogTitles,userName});
});

app.get("/contact", (req,res) =>{
    res.render("contact.ejs",{uRL:req.url});
});

app.get("/about", (req,res) =>{
    
    res.render("about.ejs",{uRL:req.url});
});

app.listen(port, (req,res) =>{
    console.log('the server is running on '+port);
});
