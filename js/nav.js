
var site_section = null

$('.site-nav a').click(function(e){
	e.preventDefault()
	changeSection ($(e.currentTarget).attr('rel'))
})


function changeSection(rel){

	if(site_section && rel != site_section){
		$('.site-nav a[rel="' + site_section + '"]').removeClass('ativo')
		$('.site-viewport section.' + site_section).removeClass('enter').addClass('exit')
	}
	$('.site-nav a[rel="' + rel + '"]').addClass('ativo')
	$('.site-viewport section.' + rel).removeClass('exit').addClass('enter')
	$('.site-viewport').height($('.site-viewport section.' + rel).height())

	if(site_section == 'mapa'){
		closeInfo()
	}
	
	site_section = rel

	sound_over.play()
}

$(window).resize(function(e){
	$('.site-viewport').height($('.site-viewport section.' + site_section).height())
})