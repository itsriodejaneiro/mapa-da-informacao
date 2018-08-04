// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

$('body').on('touchstart',function(e){
	$('html, body').mousewheel()
})

$('.landing').click(function(e){
  $('html, body').mousewheel()
})

$('html, body').mousewheel(function(e){
	console.log('scroll')
	var landing = $('.landing')
	if(!landing.hasClass('close')){
    $('.site').addClass('after-landing')
		landing.addClass('close')
		$('.landing-spacer').addClass('close')
    $('.landing').unbind('click')
    $('body').unbind('touchstart')
		$('html, body').unbind('mousewheel')
		$('html, body').animate({scrollTop: 0}, 1000)
		disableScroll()
		setTimeout(function(){
			enableScroll()
			$('.landing, .landing-spacer').remove()
			$('.site-nav').addClass('fixed')
			changeSection('sobre')
		},1000)
	}
})