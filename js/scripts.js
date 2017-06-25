//business logic
var userNumber = function(myNumber){
  for (var i=myNumber; i<=myNumber; i++)
    if (myNumber % 3 === 0) {
      return "Ping";
    }
    else if (myNumber % 5 === 0) {
      return "Pong";
    }
    else if (myNumber % 15 === 0) {
      return "PingPong";
    }
    else {
      return (myNumber);
    }
};

//user interface logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var myNumber = parseInt($("input#myNumber").val());
    var result = userNumber(myNumber);
    $('#result').text(myNumber);
  });
});
