// Wrap all code that interacts with the DOM in a call to jQuery to ensure that

// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currenthour = dayjs().hour();
  var blockcontainer = $(".container-lg")
  var storeitems =
      JSON.parse(window.localStorage.getItem("storage"))
  console.log(currenthour);
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var hour = $(this).parent().attr("id").split("-")[1];
    console.log(hour);
    var tasks = $(this).siblings(".description").val();
    console.log(tasks);
    var savetostorage =
      JSON.parse(window.localStorage.getItem("storage")) || [];
    savetostorage.push({ hour, tasks });
    window.localStorage.setItem("storage", JSON.stringify(savetostorage));
  });

    for (let i = 9; i < 18; i++) {
    var timeblock = $("<div>")
   timeblock.addClass("row time-block") .attr("id","hour-"+i)
   var hourblock = $("<div>")
   hourblock.addClass("col-2 col-md-1 hour text-center py-3").text(dayjs().hour(i).format("h A"))
   var textarea = $("<textarea>")
   textarea.addClass ("col-2 col-md-1 hour text-center py-3").val
   if (storeitems[i].hour==i) {
    textarea.val(storeitems[i].tasks)
   }
    timeblock.append(hourblock).append(textarea)
    timeblock.appendTo(blockContainer)
   }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
