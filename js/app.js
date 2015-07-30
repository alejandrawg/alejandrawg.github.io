$(document).ready(function() {
    var colorOrig= $(".boxColor").css('background-color');
    $(".boxColor").hover(
    function() {
        //mouse over
        $(this).css('background-color', '#E6B5FF')
    }, function() {
        //mouse out
        $(this).css('background-color', colorOrig)
    });
});

$('.slides').slick({
	fade: true,
	autoplay: true,
	autoplaySpeed: 6000,
	arrow: false,
	dots: true
});