$(function() {

  $('.slider-box-scrol-arc-11').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  })
});
$(function(){
	$('.menu-am').on('click', function(){
		$('.headre_nav-menu_container').toggleClass('menu-open');
	});
})
$(function(){
	$('.menu-am').on('click', function(){
		$('.menu-am').toggleClass('menu-clos');
	});
})
$("a[href^='#']").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate({
      scrollTop: $(href).offset().top
  });

  return false;
});
$(function(){
	$('.b1').on('click', function(){
		$('.b1').toggleClass('color');
	});
})
$(function(){
	$('.b2').on('click', function(){
		$('.b2').toggleClass('color');
	});
})
$(function(){
	$('.b3').on('click', function(){
		$('.b3').toggleClass('color');
	});
})
$(function(){
	$('.b4').on('click', function(){
		$('.b4').toggleClass('color');
	});
})
$(function(){
	$('.b5').on('click', function(){
		$('.b5').toggleClass('color');
	});
})