// console.log("app.js file loaded")

// Render table on page load with all ufo sightings in data file
// Get a reference to the table body
var tbody = d3.select("tbody");

// Confirm the data can be called from data.js file
// console.log(data)

// Loop through the data and console.log each value
data.forEach(function(ufoData) {
    // console.log(ufoData);
    var row = tbody.append("tr");

    // Collect the key and value for each object
    Object.entries(ufoData).forEach(function([key, value]) {
        // console.log(key, value);

        // Use d3 to append one cell per ufo data value
        var cell = row.append("td");

        // Append a cell to the row for each value in ufo data object
        cell.text(value);
    });
});

// Event handler
// Use d3 to select the button
var button = d3.select("#filter-btn");

// Use d3 to select the form-
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear the existing output
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // console.log(inputValue);
    // console.log("You clicked the button");

    // Filter the table based on inputValue
    var dateFiltered = data.filter(obj => obj.datetime === inputValue);

    // console.log(dateFiltered);

    // Loop through the data and console.log each value
    dateFiltered.forEach(function(ufoData) {
        // console.log(ufoData);
        var row = tbody.append("tr");

        // Collect the key and value for each object
        Object.entries(ufoData).forEach(function([key, value]) {
            console.log(key, value);

            // Use d3 to append one cell per ufo data value
            var cell = row.append("td");

            // Append a cell to the row for each value in ufo data object
            cell.text(value);
        });
    });    
}











