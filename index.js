var reservedSeats = {};

$(function(){

  $('form').on('submit', function(event){
    event.preventDefault();

  });

  $('.seat').click(function(){
  $('#chart').toggle();
  $('#form').toggle();
 });
$('.seat').click(function(){
  $('#form').show();
 });
$('#submit').click(function(){
  $('#form').toggle();
  $('#chart').toggle();
 });
$('#cancel').click(function(){
  $('#form').toggle();
  $('#chart').toggle();

 // reservedSeats[seatName] = {
 //   customerName: name,
 //   number: phoneNumber
 // }

 });
});


/*$(this).trigger('reset'); for the form to reset
add a reserved class to call upon it in order to show reserved seat*/
// event handerler funciton
// $('form').submit(function(evt){
// evt.preventDefault();
// var firstName = $(this).find('#first-Name');
// var lastName = $(this).find('#last-Name');
// var seatNumber = $(this).find('#seat-Number').val();
// console.log(firstName, lastName, seatNumber);
// });

//if seat is taken, toggle class and change color
