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

// Variables


// Need to set user input as an array and use JSON.stringify to set array to string
// then use parse when retrieving?
// Functions
// $(window).on("load", loadTextarea(){
//     $("#nineAM").val() = localStorage.getItem("textarea", "");
//     $("#tenAM").value = localStorage.getItem("textarea", "");
//     $("#elevenAM").value = localStorage.getItem("textarea", "");
//     $("#twelvePM").value = localStorage.getItem("textarea", "");
//     $("#onePM").value = localStorage.getItem("textarea", "");
//     $("#twoPM").value = localStorage.getItem("textarea", "");
//     $("#threePM").value = localStorage.getItem("textarea", "");
//     $("#fourPM").value = localStorage.getItem("textarea", "");
//     $("#fivePM").value = localStorage.getItem("textarea", "");

// });

function saveTextarea(){
    $("#textarea").value = localStorage.setItem("textarea", "");
};

//Moment JS
$("#currentDay").moment().format("dddd, MMMM Do"); 

// Event listeners
// var saveText = $(".saveBtn").on("click", saveTextarea(){
// console.log(saveText)
    
// });