// JavaScript Document

$(document).ready(function(){
	
	// show and hide menu
	$("i#menu_icon").click(function(){
		$("section#second_left_menu").slideToggle(1500);
	});
	
	// make a search box in the Recent Order Table
	$("input.search").keyup(function(){
		var input_value = $(this).val().toLowerCase();
		$("table#the_table tr.content").filter(function(){
			$(this).toggle($(this).text().toLowerCase().indexOf(input_value) > -1);
		});
	});
	
});