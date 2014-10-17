/*
 * jQuery Panel Accordion Plugin
 *
 * Copyright (c) 2014 mid:P Shoma Ishihara
 * licensed under MIT license.
 *
 * http://midp.jp
 * https://github.com/midp/jQuery-PanelAccordion
 *
 * Version: 0.0.1
 */
$(function(){
	//速度指定
	var speed = 400;
	$(".pa-thum li").on("click", function(){
		var num =  $(".pa-thum li").index(this);
		if($(".pa-thum li").eq(num).hasClass('slided')){
		    $(".pa-cont li").eq(num).slideUp(speed);
		    $(this).removeClass('slided');
		}else{
		    $(".pa-cont li").slideUp(speed);
		    setTimeout(function(){
		        $(".pa-cont li").eq(num).slideDown(speed);
		        $(".pa-thum li").removeClass('slided');
		        $(".pa-thum li").eq(num).addClass('slided');
		    },speed);
		}
	});
	return false;
});
