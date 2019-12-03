// Requiring Borewell model
var db = require("../models");
var path = require("path");

module.exports = function(app) {
    // Root route
    app.get("/", function(req, res){
        console.log("Hello");
        res.sendFile(path.join(__dirname, "../public/assets/index.html"));
    })
}