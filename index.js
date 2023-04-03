let startDateInput = document.getElementById("startDate");
let endDateInput = document.getElementById("endDate");
let outputDiv = document.getElementById("output");

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


startDateInput.value = new Date().toISOString().split('T')[0]
endDateInput.value = new Date().toISOString().split('T')[0]


function generate(){
    console.log("hello")
    let startDate = new Date(startDateInput.value);
    startDate.setTime(startDate.getTime() + (12*60*60*1000));
    let endDate = new Date(endDateInput.value);
    endDate.setTime(endDate.getTime() + (12*60*60*1000));
    endDate.setTime(endDate.getTime() + (24*60*60*1000));
    const diffTime = Math.abs(startDate - endDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    console.log(diffDays)

    let dateArray = [];

    for (let i = 0; i < diffDays; i++) {
        let thisDay = new Date(startDate.getTime());
        thisDay.setDate(thisDay.getDate() + i);

        var month = thisDay.getUTCMonth() + 1;
        var day = thisDay.getUTCDate();
        var year = thisDay.getUTCFullYear();
        let dayName = days[thisDay.getDay()];

        let ouputDateHtml = "<b>" + dayName + " " + day + "/" + month + "/" + year + ":<b>";

        console.log(ouputDateHtml);


        dateArray.push(ouputDateHtml);




    }

    let outputHtml = dateArray.join("<br>");

    outputDiv.innerHTML = outputHtml;



}