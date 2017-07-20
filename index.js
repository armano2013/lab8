var reservedSeats = {};

$(function(){

$('.seat').click(function(){
	$('#form').toggle();
	$('#chart').toggle();
	var seatNum = $(this).text();
	console.log("Seat number " + seatNum);
	$('#seatNum').val(seatNum);
 });

$('form').on('submit', function(event){
	event.preventDefault();
	$('#form').toggle();
	$('#chart').toggle();

	var name = $(this).find('#name').val();
	var seatNumber = $(this).find('#seatNum').val();
	var phoneNumber = $(this).find('#phone').val();

	console.log(seatNumber + "  " + name + "   " + phoneNumber);

	$('#' + seatNumber).addClass('reserved').html('Reserved');  // this takes a number from the seat and changes 
	// the id to the correct id because all the ids of the seats are “1” or “4”, etc.  
	// It then takes the text and replaces it with the word ‘reserved’.
	$(this).trigger('reset');  //This clears the fields in the form.
	reservedSeats[seatNumber] = {
		customerName: name,
		number: phoneNumber
	}

	console.log(reservedSeats);
 });
$('#cancel').click(function(event){
	event.preventDefault();
	$('#form').toggle();
	$('#chart').toggle();
 });

$('div').hover(function() {
// What happens when I hover over the div
	var $div = $(this);
	if($div.hasClass('reserved')){
	$div.html(reservedSeats[$div.attr('id')].customerName);
	}
	}, function(){
//What happens when I hover out of the div
	var $div = $(this);
	if($div.hasClass('reserved')){
		$div.html('reserved');
	}
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
