$(function(){
  $('.seat').click(function(){
   $('#chart').toggle();
   $('form').toggle();
});
//$('.seat').click(function(){
  //$('form').show();
});
$('#submit').click(function(){
  $('form').toggle();
  $('#chart').toggle();
});
$('#cancel').click(function(){
  $('form').toggle();
  $('#chart').toggle();
});
});

// event handerler funciton
// $('form').submit(function(evt){
// evt.preventDefault();
// var firstName = $(this).find('#first-Name');
// var lastName = $(this).find('#last-Name');
// var seatNumber = $(this).find('#seat-Number').val();
// console.log(firstName, lastName, seatNumber);
// });

//if seat is taken, toggle class and change color
