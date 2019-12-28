// Check off Specific Todos by Clicking (using jquery manually)
/*
$('li').click(function () {
  // if li is gray, turn it black, else turn it gray
  if ( $(this).css("color") === "rgb(128, 128, 128)") {
    $(this).css({
      color: "black",
      textDecoration: "none"
    });
  } else {
    $(this).css({
      color: "gray",
      textDecoration: "line-through"
    });
  }
});
*/

// Using css classes (much simpler huh??)
$('ul').on('click', 'li',  function() {
  $(this).toggleClass("completed");
});

// Click on X to delete Todo
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove(); // this element refers to the last element operating
  });
  event.stopPropagation(); // prevent event propagation to parent elements
});

// Create new todos
$('input[type="text"]').keypress(function(event) {
  if (event.which === 13) {
    // Grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$('.fa-plus').click(function() {
  $("input[type='text'").fadeToggle();
});
