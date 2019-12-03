// Declare variables
let tbody = d3.select("tbody");
// from data.js
var tableData = data;


// Creates a function to build the table
function buildTable(data){
  // Clear existing data
  tbody.html("");
  // Loops through "data"
  data.forEach((dataRow) => {
		// Appends 'tr' to 'tbody'
    let row = tbody.append("tr");
    // Use 'Object.values' and 'forEach' to iterate throguh values
    Object.values(dataRow).forEach((val) => {
      // Appends a cell to the row for each value
      let cell = row.append("td");
      cell.text(val);
    });
  })
}
// An event that triggers a function when the button is clicked
function handleClick(){
	// Prevents page refresh
  d3.event.preventDefault();
  // Selects HTML input element, gets the value property of that input element
  let date = d3.select("#datetime").property("value");
  let filterData = tableData;

  // Checks if a date was entered and filters data using that date
  if(date) {
  	// Applies a filter to the table data to only keep rows where datetime value matches the filter value
    filterData = filterData.filter((row) => row.datetime === date);
  }
  // Builds a table with filtered data
  buildTable(filterData);
}
// 'on' function to attach an event to the handler function
d3.selectAll("#filter-btn").on("click", handleClick);
// Builds a table with data.js
buildTable(tableData);