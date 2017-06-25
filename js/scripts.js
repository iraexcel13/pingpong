var userNumber = function(myNumber){
// var num = 1
  for (var i=userNumber; i<=userNumber; i++)
    if (userNumber % 3 === 0) {
      return "Ping";
    }
    else if (userNumber % 5 === 0) {
      return "Pong";
    }
    else if (userNumber % 15 === 0) {
      return "PingPong";
    }
    else {
      return ("Invalid");
    }
//  }
};

$(document).ready(function(){
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var myNumber = parseInt($("input#myNumber").val());
    var result = userNumber (myNumber);
    $('#result').text(myNumber);
  });
});
