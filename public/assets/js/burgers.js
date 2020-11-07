// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $("#add").on("click", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
    
      var newBurger = {
        burger_name: $("#burger").val().trim(),
      };
    
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("Added New Burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  $(".new-burger").on("click", function (event) {
    var id = $(this).data("id");
    var isDevoured = $(this).data("isdevoured");

    var newDevouredState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("Burger state to", isDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".del-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("Burger Deleted!", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});