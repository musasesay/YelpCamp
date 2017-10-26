var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
    {name: 'Mountain', image: 'https://www.nhstateparks.org/uploads/images/Dry-River_Campground_02.jpg'},
    {name: 'Beach', image: 'https://www.nhstateparks.org/uploads/images/Dry-River_Campground_02.jpg'},
    {name: 'Creek', image: 'https://www.nhstateparks.org/uploads/images/Dry-River_Campground_02.jpg'},
    {name: 'Mountain', image: 'https://www.nhstateparks.org/uploads/images/Dry-River_Campground_02.jpg'},
    {name: 'Beach', image: 'https://www.nhstateparks.org/uploads/images/Dry-River_Campground_02.jpg'},
    {name: 'Creek', image: 'https://www.nhstateparks.org/uploads/images/Dry-River_Campground_02.jpg'},
    {name: 'Mountain', image: 'https://www.nhstateparks.org/uploads/images/Dry-River_Campground_02.jpg'},
    {name: 'Beach', image: 'https://www.nhstateparks.org/uploads/images/Dry-River_Campground_02.jpg'},
    {name: 'Creek', image: 'https://www.nhstateparks.org/uploads/images/Dry-River_Campground_02.jpg'}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp Server has started.");
});