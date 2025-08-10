//--------------------Lab_1(Rendering ejs file)------------------
/*
const express = require("express");
const app = express();
const port = 3000;

//------For better Lookup Views------------
const Path = require("path");
app.set("Views", Path.join(__dirname, "/Views"));

app.set("view engine", "ejs");
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

app.get("/", (req, res) => {
    // res.send("This is root");
    res.render("home.ejs");
});
*/

//--------------------Lab_2(InterPolation Syntax)-------------------

const express = require("express");
const app = express();
const port = 3000;

//------For better Lookup Views------------
const Path = require("path");
app.set("Views", Path.join(__dirname, "/Views"));

app.set("view engine", "ejs");
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6 + 1);
    // res.render("dice.ejs",{num:diceVal});
    res.render("dice.ejs", { diceVal });
});

//--------------------Lab_3(Instagram EJS)-------------------

app.get("/ig/:username", (req, res) => {

    //Data:

    const followers_name = ["adam", "Bob", "Abrahim", "messy"];
    let { username } = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];


    if (data) {
        res.render("instagram.ejs", { username, followers_name, data });
    } else {
        res.render("Error.ejs");
    }

    // res.render("instagram.ejs", { data });
    // res.render("instagram2.ejs", { data });

    // res.send("Ok");
})

//-------------------Lab_4(Conditional Statement)------------