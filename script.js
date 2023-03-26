$(document).ready(function() {
  // get current date
  var currentDate = moment().format("dddd, MMMM Do");

  // display current date in header
  $("#currentDay").text(currentDate);

  // check time and set time block color
  function setTimeBlockColor() {
    // get current hour
    var currentHour = moment().hour();

    // loop through time blocks
    $(".time-block").each(function() {
      // get time block hour
      var timeBlockHour = parseInt($(this).children(".hour").text().slice(0, -2));

      // set time block color based on current hour
      if (timeBlockHour < currentHour) {
        $(this).children(".description").addClass("past");
      }
      else if (timeBlockHour === currentHour) {
        $(this).children(".description").addClass("present");
      }
      else {
        $(this).children(".description").addClass("future");
      }
    });
  }

  setTimeBlockColor();

  // save events to local storage
  $(".saveBtn").on("click", function() {
    // get event description and hour
    var eventDescription = $(this).siblings(".description").val();
    var eventHour = $(this).siblings(".hour").text();

    // save event to local storage
    localStorage.setItem(eventHour, eventDescription);
  });

  // load events from local storage
  $(".time-block").each(function() {
    // get time block hour
    var timeBlockHour = $(this).children(".hour").text();

    // load event from local storage
    var eventDescription = localStorage.getItem(timeBlockHour);

    // display event in time block
    $(this).children(".description").val(eventDescription);
  });
});
