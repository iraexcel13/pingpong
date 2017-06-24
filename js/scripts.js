var userNumber = function(myNumber){
  if ((myNumber % 3 === 0)){
    return true;
  }
  else {
    return false;
  }
};

$(document).ready(function(){
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var myNumber = parseInt($("input#myNumber").val());
    var result = userNumber (myNumber);
    $('.myNumber').text(myNumber);
  });
});
