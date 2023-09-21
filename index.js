let startDateInput = document.getElementById("startDate");
let endDateInput = document.getElementById("endDate");
let outputDiv = document.getElementById("output");

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Set the initial values of the startDateInput and endDateInput fields to the current date
const today = new Date().toISOString().split("T")[0];
startDateInput.value = today;
endDateInput.value = today;

function generate() {
  // Parse the date values entered in the input fields
  // 12 hours is added to avoid time difference issues such as daylight savings
  let startDate = new Date(startDateInput.value);
  startDate.setTime(startDate.getTime() + 12 * 60 * 60 * 1000); // Add 12 hours to the start date

  // 24 hours is added so that the final date is included
  let endDate = new Date(endDateInput.value);
  endDate.setTime(endDate.getTime() + 12 * 60 * 60 * 1000); // Add 12 hours to the end date
  endDate.setTime(endDate.getTime() + 24 * 60 * 60 * 1000); // Add 24 hours to the end date

  // Calculate the time difference between the start and end dates in milliseconds
  const diffTime = Math.abs(startDate - endDate);

  // Calculate the number of days in the date range
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let dateArray = [];

  // Loop through each day in the date range
  for (let i = 0; i < diffDays; i++) {
    let thisDay = new Date(startDate.getTime());
    thisDay.setDate(thisDay.getDate() + i); // Calculate the date for the current iteration

    // Get the month, day, and year components of the current date
    var month = thisDay.getUTCMonth() + 1; // Months are zero-based, so add 1
    var day = thisDay.getUTCDate();
    var year = thisDay.getUTCFullYear();

    // Get the name of the day of the week for the current date
    let dayName = days[thisDay.getDay()];

    let outputDateHtml =
      "<b>" + dayName + " " + day + "/" + month + "/" + year + ":<b>";

    dateArray.push(outputDateHtml); // Add the formatted date to the dateArray
  }

  // Join the formatted date strings with line breaks and update the content of the outputDiv
  let outputHtml = dateArray.join("<br><br>");
  outputDiv.innerHTML = outputHtml;
}
