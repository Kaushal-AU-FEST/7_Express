//--------------------Lab 1-----------------------
/*

//Act as server
const express = require("express");
const app = express();

// console.dir(app);

// most famous method app.listen : listen for incoming api request

// let port = 3000;
let port = 8080;
//Logical endpoint of n/w connection that is used to exchange info b?w a web server and a web clint
//by default 3000 and 8080 available for custom server

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

//listen made webserver for incoming api req
*/
/*

const { request, response } = require("express");
const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

*/
//--------------------------Lab 2----------------------

/*
const express = require("express");
const app = express();
let port = 3000;

app.listen(port,()=>{
  console.log(`App is listening on port:${port}`);
})

app.use((request,response) =>{
  console.log("Request recevied");
});

*/
//------------------------Lab 3-----------------------
/*
const express = require("express");
const app = express();
let port = 3000;

app.listen(port, () => {
  console.log(`App is listening on port:${port}`);
})

app.use((req, res) => {
  console.log("Request recevied");
  //-----------In String format-------------
  // res.send("This is a basic response");

  //------------In Object format------------
  // res.send({
  //   "name": "Apple",
  //   "Color": "Red"
  // });

  //-------------In HTML Format------------
  // let code = "<h1>Fruits</h1><ol><li>Apple</li><li>Orange</li></ol>";
  // res.send(code);
});

*/

// ------------------Lab 4 ------------------------
//Routing : process of seleting path for traffic in n/w or between multiple n/w
/*
const express = require("express");
const app = express();
let port = 3000;

app.listen(port,()=>{
  console.log(`App is listening on port:${port}`);
})

app.get("/", (req, res) => {
  res.send("Hello i am root");
});
app.get("/Fruit", (req, res) => {
  res.send("You contacted Fruits path")
});
app.get("/Root", (req, res) => {
  res.send("You contacted root path")
});
app.get("/banana", (req, res) => {
  res.send("You contacted banana path")
});
app.get("*", (req, res) => {
  res.send("Hey This path does not exist");
});


app.post("/",(req,res)=>{
  res.send("You sent a post request to root path");
})
*/

// ------------------Lab 5 ------------------------
//--------------Nodemon------------
//gives power to automatically restart server


// ------------------Lab 6 ------------------------

/*
const express = require("express");
const app = express();
let port = 3000;
app.listen(port,()=>{
  console.log(`App is listening on port: ${port}`);
})

app.get("/:username/:id",(req,res)=>{
  let {username,id} = req.params;
  let htmlstr = `<h1>Welcome to page of @${username}</h1>`;

  res.send(htmlstr);

  console.log(`userName: ${username}`);
  console.log(`userId: ${id}`);

});

*/
// ------------------Lab 7 ------------------------
/*

const express = require("express");
const app = express();
let port = 3000;
app.listen(port,()=>{
  console.log(`App is listening on port: ${port}`);
})

app.get("/:username/:id",(req,res)=>{
  let {username,id} = req.params;
  let htmlstr = `<h1>Welcome to page of @${username}</h1>`;

  res.send(htmlstr);

  console.log(`userName: ${username}`);
  console.log(`userId: ${id}`);

});

// app.get("/:search",(req,res)=>{
//   console.log(req.query);
//   res.send("No result");
// });
app.get("/:search",(req,res)=>{
  let {q} = req.query;
  res.send(`This are the Search result for Query: ${q}`);
});

*/