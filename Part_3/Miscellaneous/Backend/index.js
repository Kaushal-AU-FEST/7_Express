
//--------------Lab-1 Get & Post Request check-----------------

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get("/register", (req, res) => {


//     let { user, password } = req.query;
//     res.send(`Standerd GET response , Welcome ${user} ,I know your password😁: ${password}`);
//     res.send("Standard GET response");
// });

// app.post("/register", (req, res) => {
//     res.send("Standard POST resoponse");
// })


// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });


//---------------Lab-2 :Handling Post Requestes-----------
const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));  //we use the middleware
app.use(express.json());

app.get("/register", (req, res) => {


    let { user, password } = req.query;
    res.send(`Standerd GET response , Welcome ${user} ,I know your password😁: ${password}`);
    res.send("Standard GET response");
});

app.post("/register", (req, res) => {
    // console.log(req.body);  //Directly not showen we need to parse the data by urlencoded in app.use()

    let { user, password } = req.body;
    res.send(`Standerd GET response , Welcome ${user} ,I know your password😁: ${password}`);
    res.send("Standard POST resoponse");
})

app.listen(port, () => {

    console.log(`Listening on port ${port}`);
});
