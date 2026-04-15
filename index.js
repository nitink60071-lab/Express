const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

/*  app.use((req, res) => {
    //console.log(req);
    console.log("request received");
    //res.send ({
    //    name: "apple",
    //    color: "Red",
    //    Price: 50,
    //});
    res.send("<h1> Animals </h1> <ul> <li> Dog </li> <li> Cat </li> <li> Lion </li> </ul>");
});   */

app.get("/", (req, res) => {
    res.send("you contacted root path44");
});

/*  app.get("/find", (req, res) => {
    res.send("you contacted find path");
});

app.get("/help", (req, res) => {
    res.send("you contacted help path");
});

app.post ("/", (req, res) => {
    res.send("you sent a post request to root");
});

app.use((req, res) => {
    res.status(404).send("this path does not exist");
});  */

app.get("/:username/:id", (req, res) => {
    let {username, id } =req.params;
    let htmlStr = `<h1>welcome to the page of ${username}.<h1>`
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    let { q } =(req.query);
    if (!q) {
        res.send("nothing searched")
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});