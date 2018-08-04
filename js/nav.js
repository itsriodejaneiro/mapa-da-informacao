
var site_section = null

$('.site-nav a').click(function(e){
	e.preventDefault()
	changeSection ($(e.currentTarget).attr('rel'))
})


function changeSection(rel){

	if(site_section && rel != site_section){
		$('.site-nav a[rel="' + site_section + '"]').removeClass('ativo')
		$('.site section.' + site_section).stop().hide(0)
	}
	$('.site-nav a[rel="' + rel + '"]').addClass('ativo')
	$('.site section.' + rel).stop().fadeOut(0).fadeIn(1000)

	if(site_section == 'mapa'){
		closeInfo()
	}

	if(site_section == 'historias'){
		$('.site').removeClass('has-iframe')
		$('.site .historias iframe').remove()
	}

	if(rel == 'historias'){
		$('.site').addClass('has-iframe')
		$('.site .historias').append('<iframe src="./historias.html" frameborder="0"></iframe>')
	}
	
	site_section = rel

	sound_over.play()
}

// $(window).resize(function(e){
// 	$('.site-viewport').height($('.site-viewport section.' + site_section).height())
// })