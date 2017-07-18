$(function(){
  $('.seat').click(function(){
   $('#chart').toggle();
});
$('form').click(function(){
  $('form').toggle();
})
$(form).on(’submit’, function(){
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
