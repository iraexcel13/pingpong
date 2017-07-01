//business logic
var userNumber = function(myNumber){
  for (var i=1; i<=myNumber; i++){

    if (i % 15 === 0) {
      var number = "PingPong";
    }
    else if (i % 5 === 0) {
      var number = "Pong";
    }
    else if (i % 3 === 0) {
      var number = "Ping"
    }
    else {
      var number = i;
    }
    $("#result").append("<li>" + number + "</li>");
  }
}

//user interface logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var myNumber = parseInt($("input#myNumber").val());
    userNumber(myNumber);
  });
});
