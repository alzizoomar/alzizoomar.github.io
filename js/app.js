/*global $ */

$(function () {
	'use strict';
	$('.info-list li').click(function () {
		$(this).addClass('selected').siblings('li').removeClass('selected');
		window.console.log($(this).data('class'));
		$('.info-content div').hide();
		$('.' + $(this).data('class')).fadeIn(1000);
	});
    
    
    $('.navbar span i').click(function () {
        $('.navbar ul').removeClass('.hidden-xs');
		$('.navbar ul').addClass('.visible-xs').toggle(1000);
	});
    
    
    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
});
