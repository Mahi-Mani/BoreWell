// Requiring Borewell model
var db = require("../models");
var path = require("path");

module.exports = function(app) {
    // Root route
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/index.html"));
    })

    // POST values
    app.post("/api/new", function(req, res){
        console.log("Inside api/new route");
        db.Borewell.create({
            OPENEDBY: req.body.name,
            LOCATION: req.body.location,
            STATUS: true
        }).then(function(result){
            res.json(result);
        })
    })
}