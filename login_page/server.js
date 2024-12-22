let express = require("express")
let app = express();
let fs = require("fs")
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    fs.readFile("html.html", function (err, data) {
        res.write(data);
        res.end()
    })
})

app.post("/submit", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let u = ["devvin", "devvo"];
    let p = ["110711", "1107"];
    
    let loginFound = searchUserPass(u, p, username, password)
    if (loginFound) {
        fs.readFile("page.html", function (err, data) {
            res.write(data);
            res.end()
        })

    } else {
        fs.readFile("html.html", function (err, data) {
            res.write(data);
            res.end()
        })
    }
})

function searchUserPass(u, p, username, password) {
    for (let i = 0; i < u.length; i++) {
        if (u[i] == username) {
            if (p[i] == password) {
                return true;
            } else {
                return false
            }
        }
    }
    return false
}



app.listen(8080);