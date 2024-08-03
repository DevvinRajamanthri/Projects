let express = require("express");
let app = express();
let fs = require("fs");
app.use(express.urlencoded({ extended: true })); 

app.get("/", function(req, res){
    fs.readFile("home.html", function(err, data){
        res.write(data);
        res.end();
    });
})
app.get('/games', (req, res) => {
    fs.readFile("games.html", function(err, data){
        res.write(data);
        res.end()
    })
});
  
    
app.get('/projects', (req, res) => {
    fs.readFile("projects.html", function(err, data){
        res.write(data);
        res.end()
    })
});

app.get('/1.png', (req, res) => {
    // request.url = /myfave.png
    // ./img/ + req.url  = ./img//myfave.png
    fs.readFile("./img" + req.url, function(err, data){
        res.write(data);
        res.end()
    })
});
app.get('/2.png', (req, res) => {
    // request.url = /myfave.png
    // ./img/ + req.url  = ./img//myfave.png
    fs.readFile("./img" + req.url, function(err, data){
        res.write(data);
        res.end()
    })
});
app.get('/3.png', (req, res) => {
    // request.url = /myfave.png
    // ./img/ + req.url  = ./img//myfave.png
    fs.readFile("./img" + req.url, function(err, data){
        res.write(data);
        res.end()
    })
});
app.get('/4.png', (req, res) => {
    // request.url = /myfave.png
    // ./img/ + req.url  = ./img//myfave.png
    fs.readFile("./img" + req.url, function(err, data){
        res.write(data);
        res.end()
    })
});
app.get('/5.png', (req, res) => {
    // request.url = /myfave.png
    // ./img/ + req.url  = ./img//myfave.png
    fs.readFile("./img" + req.url, function(err, data){
        res.write(data);
        res.end()
    })
});
app.get('/myfave.png', (req, res) => {
    // request.url = /my2fave.png
    // ./img/ + req.url  = ./img//myfave.png
    fs.readFile("./img" + req.url, function(err, data){
        res.write(data);
        res.end()
    })
});
app.get('/6.png', (req, res) => {
    // request.url = /my2fave.png
    // ./img/ + req.url  = ./img//myfave.png
    fs.readFile("./img" + req.url, function(err, data){
        res.write(data);
        res.end()
    })
});
app.listen(8080);
