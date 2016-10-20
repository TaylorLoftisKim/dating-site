$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    if (age >= 30 && gender === 'male') {
      $('#whitney').show();
    } else if (age < 30 && gender === 'male') {
      $('#miley').show();
    } else if (age >= 30 && gender === 'female') {
      $('#obama').show();
    } else {
      $('#justin').show();
    }

    event.preventDefault();
  });
});
