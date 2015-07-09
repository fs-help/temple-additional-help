function show_hide_all_ss () {
	$('img.ss_icon').toggleClass('hide');
	$('span.ss_link').toggleClass('hide');
	$(".example_only").toggleClass('hide');

}

function show_hide_single_ss (cur_par) { //cur_par is the current paragraph object
	
	//get the next paragraph, which always contains the image
	var img_par = $(cur_par).nextAll('p').eq(0);
	//get the ID of the image, which is always the first child of img_par
	var img = $(img_par).children().eq(0);
	//get first variable span
	var variable_span1 = $(cur_par).children().eq(0);
	//get second variable span
	var variable_span2 = $(cur_par).children().eq(1);
	//add or remove "hide" class to control visibility
	img.toggleClass('hide');
	variable_span1.toggleClass('hide');
	variable_span2.toggleClass('hide');
}

function show_hide_all_ss2 (cur_par) { //cur_par is the current paragraph object
	
	//variable to capture current state of show all link (to make screen shots hidden or visible)
	var hide_test = $(cur_par).children('img').eq(1).attr('class'); 
	 		
	$('img.ss_icon').toggleClass('hide');
	$('span.ss_link').toggleClass('hide');
			
	if (hide_test.indexOf('hide') >= 0) { //if "hide" is in hide_test--in other words, if clicking "all" link will show all screen shots, then show all, if they're already visible (avoids problem of incorrectly toggling screen shots that are already hidden)
	$('p.toggle_text span:nth-child(1)').addClass('hide'); //span that holds + icon and show illustration variable
	$('p.toggle_text span:nth-child(2)').removeClass('hide'); //span that holds minus icon and hide illustration variable
	$('.screenshot').removeClass('hide'); //all screen shot images
		
		//for some reason, removing the class this way makes the variable not work below when "hide" is removed
	
	}	
	
	else { //if "hide" is NOT in hide_test--in other words, if clicking "all" link will hide all screen shots, then hide all, if they're already hidden
		
		$('p.toggle_text span:nth-child(1)').removeClass('hide'); //span that holds + icon and show illustration variable
		$('p.toggle_text span:nth-child(2)').addClass('hide'); //span that holds minus icon and hide illustration variable
		$('.screenshot').addClass('hide'); //all screen shot images
	}
		
	}

	function show_hide(toggler){
		/*this function can be used to show/hide inline screen shots. The text toggles from "show image" to "hide image."
		usage: 
		1. create a toggle link similar to this:
		<span id="change_unit" class="toggler" onclick="show_hide(this)">show image</span>
		Notes: id can be any valid name, but everything else must be as in the example above.
		2. The image to be shown/hidden must be the id in the span + "_img": for example, if the id of the span is "change_unit" the id of the image must be "change_unit_img" */
		var toggler_text = toggler.innerHTML;
		var pic_id = toggler.id + '_img';
		var pic = document.getElementById(pic_id);
		if (toggler_text == 'show image') {
			toggler.innerHTML = 'hide image';
			pic.style.display = 'block';}
		else {
			toggler.innerHTML = 'show image';
			pic.style.display = 'none';}
	}

function openCallout(callout_id) {
	$("div[id^='callout']").hide();
	$('#' + callout_id).show();
}

function closeCallout(callout_id) {
	$('#' + callout_id).hide();
}