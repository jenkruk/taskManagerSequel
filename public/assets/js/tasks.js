//Header space for easier readability

// Make sure we wait to attach our handlers until the DOM is fully loaded.



$(function() {

  (function()
  {
    // instantiate moment
    var dateTime = moment().format('dddd, MMMM Do YY h:mm a');
     
    $(".date").append(dateTime);
  }) ();
  


  //Move to-do to done and vice versa
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var newStatus = $(this).data("completed");
      newStatus = (newStatus==0) ? 1 : 0;
      console.log(newStatus);
      var newStatusState = {
        completed: newStatus
      };
  
      // Send the PUT request.
      $.ajax("/api/tasks/" + id, {
        type: "PUT",
        data: newStatusState
      }).then(
        function() {
          console.log("changed task to", newStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  // sumbit new task to to-do column
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newTask = {
        name: $("#task").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/tasks", {
        type: "POST",
        data: newTask
      }).then(
        function() {
          console.log("created new task");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  // delete task
    $(".delete-task").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/tasks/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted task", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });


  });
  