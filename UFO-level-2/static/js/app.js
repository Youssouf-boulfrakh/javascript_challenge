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
var form1 = d3.select("#form1");
var form2 = d3.select("#form2");
var form3 = d3.select("#form3");
var form4 = d3.select("#form4");
var form5 = d3.select("#form5");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form1.on("submit", runEnter);
form2.on("submit", runEnter);
form3.on("submit", runEnter);
form4.on("submit", runEnter);
form5.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear the existing output
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputCity = inputCity.property("value");
    var inputState = inputState.property("value");
    var inputCountry = inputCountry.property("value");
    var inputShape = inputShape.property("value");

    // console.log(inputValue);
    // console.log(inputCity);
    // console.log(inputState);
    // console.log(inputCountry);
    // console.log(inputShape);
    // console.log("You clicked the button");

    // Filter the table based on inputValue
    var dateFiltered = data.filter(obj => obj.datetime === inputValue);
    var cityFiltered = data.filter(obj => obj.city === inputCity);
    var stateFiltered = data.filter(obj => obj.state === inputState);
    var countryFiltered = data.filter(obj => obj.country === inputCountry);
    var shapeFiltered = data.filter(obj => obj.shape === inputShape);

    // console.log(dateFiltered);
    // console.log(cityFiltered);
    // console.log(stateFiltered);
    // console.log(countryFiltered);
    // console.log(shapeFiltered);

    // Eliminate all objects not in combined filters


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

