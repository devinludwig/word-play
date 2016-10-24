$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#1").val();
    var array = userInput.split(" ");
    var newArray = []
    array.forEach(function(word) {
      if (word.length >2) {
        newArray.push(word)
      };
      console.log(newArray);
      newArray = newArray.reverse();
      var output = newArray.join(' ');
      $("h2").text(output);
    });
  });
});
