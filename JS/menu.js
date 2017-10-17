//Скрипт для главного меню
		$(document).ready(function(){
		// 	$(function() {
		// 	var pull 		= $('#pull');
		// 		menu 		= $('nav ul');
		// 		menuHeight	= menu.height();

		// 	$(pull).on('click', function(e) {
		// 		e.preventDefault();
		// 		menu.slideToggle();
		// 	});

		// 	$(window).resize(function(){
  //       		var w = $(window).width();
  //       		if(w > 320 && menu.is(':hidden')) {
  //       			menu.removeAttr('style');
  //       		}
  //   		});
		// });
	$('#pull').click(function(){$('#list_main').slideToggle()});
	//Скрипт для меню каталога
	$('.pull_2').click(function(){$('#list_1').slideToggle()});
		});