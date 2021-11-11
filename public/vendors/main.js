var now = new Date().getTime()

// soundfx
var sound_over = new Howl({ src: ['../snd/mouseclick1.wav'] })
var sound_click = new Howl({ src: ['../snd/switch37.wav'] })

// scroll

function doScroll(top){

	$('html, body').animate({scrollTop: top}, 300)

}