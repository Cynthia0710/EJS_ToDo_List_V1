const express = require("express");
const bodyParser = require("body-parser");
const date = require(`${__dirname}/date.js`);

const app = express();
const port = 3000;

let items = [];
let workItems = [];

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    const day = date.getDate();
    res.render("list", { listTitle: day, newListItems: items });
});

app.get("/Work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems })
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.post("/", function (req, res) {
    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/Work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.listen(port, function (req, res) {
    console.log(`Server started on port ${port}`);
});
