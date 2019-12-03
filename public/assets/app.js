$(document).ready(function () {
    // On click of submit button
    $("#submit-btn").on("click", function (event) {
        event.preventDefault();
        console.log("Inside submit button");
        var name = $("#name").val().trim();
        var location = $("#location").val().trim();
        populateTable(name, location);
    })

    // Function that populates values to table
    function populateTable(name, location) {
        var ownerData = {
            name: name,
            location: location
        };
        // POST values
        $.ajax("/api/new", {
            type: "POST",
            data: ownerData
        }).then(function(result){
            console.log("Inserted into table");
        })
    }

    // On click function for view button
    $("#view-btn").on("click", function(event){
        event.preventDefault();
        console.log("Inside view button");

        // GET values
        $.ajax("/api/view", {
            type: "GET"
        }).then(function(result){
            console.log("All values");
            console.log(result);
        })
    })
})