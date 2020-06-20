// USE CASES:
    // 1) On load
        // Planner is ready with current date under main header
            // 9AM - 5PM, 9 timeblocks total
        // Timeblocks are displayed color coded depending on three conditions:
            // past = gray, present = red, future = green
    // 2) User clicks main body of timeblock
        // Selects input for corresponding timeblock
        // User can type text in timelot
    // 3) User clicks save button 
        // Stores user input locally in browser
    // 4) User refreshes page
        // if input was saved then render user input to timeblock
        // else, do nothing


$(document).ready(function() {
    // use moment().format() to write the desired format to the div with class currentDay
    // this was working until I had to restructures my files
    $("#currentDay").text(moment().format("dddd, MMMM Do")); 

    $(".saveBtn").click(function() {
        //need to set the textarea contents in localstorage but my setItem property is undefined which I think may be a nesting problem of one of the JS scripts? I am not sure. I am going to try to create a variable to put in setItem - this did not work nor did changing around the scripts as i need the jQuery script first to use jQuery methods. 
        var timeblockText = $("#nineAM").val();
        $("#nineAM").localStorage.setItem("timeblockText")
    });
        // then need to get the localstorage contents to display to textareas
    $(".inputArea #nineAM").val(localStorage.getItem(""));



    function timeblockColor() {
        var currentTime = moment().hour();
        // console.log(currentTime) - this console log works
        var timeblockHour = $(".time-block").attr("id");
        // console.log(timeblockHour); - this console log only shows 9
        if (currentTime === timeblockHour) {
            $(this).addClass("present");           
        };
        else if (currentTime > timeblockHour) {
            $(this).addClass("future");           
        };
        else (currentTime < timeblockHour) {
            $(this).addClass("past");           
        };        
    };
    timeblockColor();
  
});