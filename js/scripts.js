$(document).ready(function() {

  // in here is loaded DOM, ready to go
  $("form").submit(function(event) {
    // now, submit is done and we can move forward with what we want to do
    // stop the form from sending info/reloading the page
    event.preventDefault();
    // store the name they entered
    // 1, find the input and select it with jquery selector
    // 2. take the value of that input, for jquery .val()
    const name = $("#name").val();

    // get the modal box
    // put the name/greeting into the box
    $(".modal-body").append(name);
    
    // select the modal and change the css to not be hidden
    $(".modal").modal('show');
    
  });

});