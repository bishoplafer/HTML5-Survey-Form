	$document.ready(function {
		$('.column').columnize({columns; 2 });
});
// Update text field for slider
function printValue(sliderID, textbox) {
	var x = document.getElementById(textbox);
	var y = document.getElementById(sliderID);
	x.value = y.value;
}	
window.onload = function() {
	printValue('hoursPractice', 'hoursPracticeValue');
}