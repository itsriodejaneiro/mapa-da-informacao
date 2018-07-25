// START VIS

var now = new Date().getTime()

// soundfx
var sound_over = new Howl({ src: ['./snd/mouseclick1.wav'] })
var sound_click = new Howl({ src: ['./snd/switch37.wav'] })

// vis variables
var width = 1280 //window.innerWidth,
var height = 960 //window.innerHeight;

var svg = d3.select(".mapa-vis")
	.attr("preserveAspectRatio", "xMinYMin meet")
	.attr("viewBox", `0 0 ${width} ${height}`)

var viewport = svg.append("g")
	.attr("class", "viewport")

var manyBody = d3.forceManyBody()

//manyBody.strength(200)
//manyBody.theta(0.6)

var simulation = d3.forceSimulation()
	.force("charge", manyBody)
	.force("link", d3.forceLink().id(function(d) { return d.id; }))
	.force("center", d3.forceCenter(width / 2, height / 2))
	.force('collision', d3.forceCollide().radius(function(d) {
		return node_size(d) * 2.4
	}))
	.on("tick", ticked)
	.alphaTarget(0.01)
	.alphaDecay(0.1)
	.alphaMin(0.0100000001)

// tooltip
var tooltip = d3.select('.tooltip')
var fx = new TextScramble(document.querySelector('.tooltip-text'),15)
var fxto = null


// UTILS

var color = d3.scaleOrdinal(d3.schemeCategory20)

var templates = {
	doc      : { size: 20, cluster: { y: 0.3, k: 4, size: 100 }, delay: 0, color: '#aec7e8' },
	app      : { size:  5, cluster: { y: 1.2, k: 2, size:  60 }, delay: 1, color: '#98df89' },
	base     : { size: 20, cluster: { y: 3.0, k: 4, size: 200 }, delay: 2, color: '#2077b4' },
	orgao    : { size:  9, cluster: { y: 5.3, k: 4, size: 200 }, delay: 3, color: '#e07145' },
	servico  : { size:  5, cluster: { y: 6.5, k: 4, size: 100 }, delay: 4, color: '#2d9f2c' },
	politica : { size:  5, cluster: { y: 7.0, k: 4, size: 100 }, delay: 5, color: '#ffbc78' },
}

function node_size(d){
	//console.log('node.size',d.id,d.weight)
	return templates[d.tipo].size + d.weight
}

function node_color(t){
	return templates[t].color
}

function node_cluster(t){
	return templates[t].cluster.y
}

function node_delay(t,i){
	return templates[t].delay * 100 + i * 50
}

function tipo_label(t){
	switch(t){
		case 'orgao':
			return 'Órgão'
		case 'base':
			return 'Base'
		case 'servico':
			return 'Serviços'
		case 'politica':
			return 'Políticas Públicas'
		case 'app':
			return 'App'
		case 'doc':
			return 'Documento'
	}
}

function tipo_rel(t){
	switch(t){
		case 'gestao':
			return 'Gestão'
		case 'operacao':
			return 'Operação'
		case 'canais':
			return 'Canal de acesso'
	}
}

var orgao_scale = d3.scaleLinear()
	.domain([1, 4])
	.range(['#fcd9b2', '#e07145'])
	.interpolate(d3.interpolateHcl)

// LEGENDAS UI

var legendas = [
	{ y:   5, text: 'Documentos', desc: "Documentos físicos do cidadão"},
	{ y: 175, text: 'Aplicativos', desc: "Apps disponíveis pro cidadão"},
	{ y: 250, text: 'Bases', desc: "Bases de dados dos registros e cadastros"},
	{ y: 520, text: 'Órgãos', desc: "Órgãos que gerem, operam ou servem de canal de acesso ao cidadão"},
	{ y: 780, text: 'Serviços e Políticas Públicas', desc: "Serviços e políticas públicas para o cidadão"}
]

var legendas_g = viewport.append("g")
	.attr("class", "legenda")
	.selectAll('g')
	.data(legendas)

var legenda = legendas_g.enter().append('g')

legenda
	.append('line')
	.attr("class", 'legenda-line')
	.attr("x1", 20 )
	.attr("y1", function(d) { return d.y })
	.attr("x2", width - 20)
	.attr("y2", function(d) { return d.y });

legenda
	.append('text')
	.attr("class", 'legenda-text')
	.text(function(d) { return d.text })
	.attr('x', 20)
	.attr('y', function(d){ return d.y + 25 })
	.on("mouseover", legenda_mouseover)
	.on("mouseout", legenda_mouseout)

// GRAPH

var graph = {}

var _links = viewport.append("g")
	.attr("class", "links")

var _nodes = viewport.append("g")
	.attr("class", "nodes")

var _labels = viewport.append("g")
	.attr("class", "labels")

// LOAD DATA

d3.csv('./data/data-nodes.csv')
  .row(d3.dsvParse).get(function(data){

	var _nodes = data
	var _nodesori = []

	data.map(function(o){
		_nodesori.push(o)
	})

	d3.csv('./data/data-links.csv')
	  .row(d3.dsvParse).get(function(data){

		var _relations = data
		var _links = []
		var _linksori = []
		
		_relations.map(function(d){
			_links.push({source: d.source, relation: d.relation, target: d.target})	
			_linksori.push({source: d.source, relation: d.relation, target: d.target})	
		})

		var k = {
			app: 0,
			base: 0,
			doc: 0,
			orgao: 0,
			politica: 0,
			servico: 0
		}

		_nodes.map(function(d){
			
			// offset
			
			var loop = templates[d.tipo].cluster.size
			var step = loop / templates[d.tipo].cluster.k

			d.offsetY = k[d.tipo]
			k[d.tipo] += step
			k[d.tipo] = k[d.tipo] % loop

			// weight, color and label
			if(d.tipo == 'base'){

				var arr = _.filter(_linksori, function(o) { return o.source  == d.id })
				d.weight = arr.length
				d.color = node_color(d.tipo)
				d.tipo_label = tipo_label(d.tipo)
				d.rel_ids = _.uniq(_.map(arr,'target'))

			} else if(d.tipo == 'orgao') {

				var arr = _.filter(_linksori, function(o) { return o.target  == d.id })
				var weight = arr.length * 7

				var cats = _.map(_.uniqBy(arr,'relation'),'relation')

				// if(arr.length > cats.length){
				// 	console.log(d.nome,arr.length, cats.length, arr,cats)
				// }

				//console.log(d.nome, 'total', weight)

				var num_color = cats.length > 1 ? 4 : _.indexOf(['canais','operacao','gestao'], cats[0]) + 1
				var label = ''

				cats.map(function(t,i){
					if(i > 0){
						if(i < cats.length - 1){
							label += ', '
						} else {
							label += ' & '
						}
						
					}
					label += tipo_rel(t)
				})

				d.weight = weight
				d.color = node_color(d.tipo) // orgao_scale(num_color)
				d.tipo_label = tipo_label(d.tipo) // label
				d.rel_ids = _.uniq(_.map(arr,'source'))

				//console.log(d.nome, num_color, _.indexOf(['gestao','operacao','canais'], cats[0]), label)

			} else {

				var arr = _.filter(_linksori, function(o) { return o.target  == d.id })
				d.weight = arr.length
				d.color = node_color(d.tipo)
				d.tipo_label = tipo_label(d.tipo)
				d.rel_ids = _.uniq(_.map(arr,'source'))
			}

		})

		// MULTIPLE LINKS: START

		_.each(_links, function(link) {

			var same = _.filter(_links, {
				'source': link.source,
				'target': link.target
			})

			_.each(same, function(s, i) {
				if(!s.linkNum){
					s.linkNum = (i + 1)
				}
			})

		})

		// MULTIPLE LINKS: END

		graph.nodes = _nodes
		graph.links = _links
		graph.data = {}
		graph.data.nodes = _nodesori
		graph.data.links = _linksori

		console.log(graph.data)
		
		update(graph.nodes, graph.links)
	})
})

function update(data_n,data_l){

	var t = d3.transition().duration(750);

	var nodes  = _nodes.selectAll('.node').data(data_n, function(d) { return d.id })
	var labels = _labels.selectAll('.label').data(data_n, function(d) { return d.id })
	var links  = _links.selectAll('.link').data(data_l, function(d) { return d.source + '_' + d.target })

	// NODES

	nodes
		.exit()
		.transition(t)
		.attr("r", 1e-6)
		.remove()

	nodes.enter()
		.append("g")
		.attr("class", function(d) {
			return "node " + d.id + " " + d.rel_ids.join(" ")
		})
		.attr('node_id', function(d) {
			return d.id;
		})
		//.call(drag_handler)
		.append("circle")
		.attr("r", 0)
		.on("mouseover", node_mouseover)
		.on("mouseout", node_mouseout)
		.on("click", node_click)
		.transition(t)
		.delay(function(d, i) { return node_delay(d.tipo,i) })
		.attr("r", function(d){ return node_size(d) } )
		.attr("fill", function(d) { return d.color })
		

	// LABELS

	labels.enter()
		.append("g")
		.attr("class", function(d) {
			return "label node-" + d.tipo + " " + d.id + " " + d.rel_ids.join(" ")
		})
		.attr('label_id', function(d) {
			return d.id;
		})
		.attr('label_nome', function(d) {
			return d.nome
		})
		.append("text")
			.text(function(d) { return d.nome; })
			.attr("text-anchor", "middle")
			.attr('x', 0)
			.attr('y', function(d){ return node_size(d) + 16 })
			.attr("opacity", 0)
			.transition(t)
			.delay(function(d, i) { return node_delay(d.tipo, i + 10) })
			.attr("opacity", 1)

	labels.exit().remove()

	// LINKS

	links.exit().remove()

	links.enter()
		// .append("line")
		.append("path")
		.attr("class", "link")
		.attr("class", function(d) {
			return d3.select(this).attr("class")
				+ ' ' + d.source
				+ ' ' + d.target
				+ ' ' + d.relation
		})
		.attr("opacity", 0)
		//.attr("stroke-width", function(d) { return Math.sqrt(d.value); })
		.transition(t)
		.delay(4000)
		.attr("opacity", 1)


	simulation
		.nodes(data_n)
		.force("link")
		.links(data_l)


	//drag_handler(nodes)
	//simulation.alpha(0.1)

	console.log('UPDATE VIS', data_n, data_l)


}

function ticked() {

	//simulation.alpha(0.1)

	//nodes.filter(function(d){return d.id == 'governo'}).attr('fx',0).attr('fy',0)

	var nodes  = _nodes.selectAll('.node')
	var links  = _links.selectAll('.link')
	var labels = _labels.selectAll('.label')

	if(nodes){

		nodes.each(function(d, i) {
			ky = 0.1
			d.x -= (d.x - width / 2) * 8 * 0.0001;
			d.y -= (d.y + d.offsetY - (node_cluster(d.tipo) + 1) * 120) * 5 * ky;
		})

		nodes
			.attr("transform", function(d) {
				d.x = Math.max(Math.min(d.x,width-100),200)
				return "translate(" + d.x + "," + d.y + ")";
			})
	}

	if(links){
		links
			.attr("d", positionLink)
			// .attr("x1", function(d) { return d.source.x; })
			// .attr("y1", function(d) { return d.source.y; })
			// .attr("x2", function(d) { return d.target.x; })
			// .attr("y2", function(d) { return d.target.y; });
	}
	if(labels){
		labels
			.attr("transform", function(d) {
				return "translate(" + d.x + "," + d.y + ")";
			})
	}

}

function positionLink(d) {

	var offset = 30 * d.linkNum;

	var midpoint_x = (d.source.x + d.target.x) / 2;
	var midpoint_y = (d.source.y + d.target.y) / 2;

	var dx = (d.target.x - d.source.x);
	var dy = (d.target.y - d.source.y);

	var normalise = Math.sqrt((dx * dx) + (dy * dy));

	var offSetX = midpoint_x + offset * (dy/normalise);
	var offSetY = midpoint_y - offset * (dx/normalise);

	return  "M" + d.source.x + "," + d.source.y +
			"S" + offSetX + "," + offSetY +
			" " + d.target.x + "," + d.target.y;
}

// DRAG

var drag_handler = d3.drag()
	.on("start", drag_start)
	.on("drag", drag_drag)
	.on("end", drag_end)

function drag_start(d) {
	if (!d3.event.active) simulation.alphaTarget(0.1).restart();
	d.fx = d.x;
	d.fy = d.y;
}

function drag_drag(d) {
	d.fx = d3.event.x;
	d.fy = d3.event.y;
}

function drag_end(d) {
	if (!d3.event.active) simulation.alphaTarget(0.01);
	d.fx = null;
	d.fy = null;
}

//*/

// ZOOM

var zoom_handler = d3.zoom()
	.on("zoom", zoom_actions)

function zoom_actions(){
	viewport.attr("transform", d3.event.transform)
}

//zoom_handler(svg)


// RESIZE

function resize() {
	
	width = window.innerWidth
	height = window.innerHeight

	svg.attr("width", width).attr("height", height);

	//force.size([force.size()[0]+(width-w)/zoom.scale(),force.size()[1]+(height-h)/zoom.scale()]).resume();
}


//d3.select(window).on("resize", resize)
//resize()

// EVENTS

function legenda_mouseover(d) {

	var svg_w = d3.select('.mapa-viewport').node().getBoundingClientRect().width
	var scale = svg_w / width

	var top = (d.y + 50) * scale
	var left = 200 * scale

	d3.selectAll('.tooltip-title')
		.text(d.text)
		.style('color', '#dddddd')

	tooltip
		.classed('show', true)
		.style('top', top + 'px')
		.transition()
		.duration(100)
		.style('left', left + 'px')

	fx.setText(d.desc)
	sound_over.play()
}

function legenda_mouseout(d) {
	//fx.setText(d.nome)
	tooltip.classed('show', false)
}

function node_mouseover(d) {

	// label

	var text = d3.select('.label[label_id="' + d.id + '"]')
	//.classed('show', true)

	if(_.indexOf(['base','doc','orgao'], d.tipo) != -1){
		text.classed('hidden',true)
	}

	// links

	d3.selectAll('.mapa').classed('highlight', true)
	d3.selectAll('.link.' + d.id).classed('highlight',true)
	d3.selectAll('.node.' + d.id).classed('highlight',true)

	// tooltip

	var svg_w = d3.select('.mapa-viewport').node().getBoundingClientRect().width
	var scale = svg_w / width

	var top = d.y < height * .8
		? d.y * scale + (node_size(d) * 0.5 + 30) * scale
		: d.y * scale - (node_size(d) * scale + 70)

	var left = d.x < width * .75
		? (d.x + 20) * scale
		: (d.x - 20) * scale

	// window safe area
	left = Math.min(Math.max(180,left),width * scale - 180)

	//console.log(svg_w, scale, top, left)

	console.log(d)

	d3.selectAll('.tooltip-title')
		.text(d.tipo_label)
		.style('color', function(){ return d.color })

	tooltip
		.classed('show', true)
		.style('top', top + 'px')
		.transition()
		.duration(100)
		.style('left', left + 'px')
		
	fx.setText(d.nomecompleto || d.nome)

	// if(d.nomecompleto){
	// 	fxto = setTimeout(function(){
	// 		fx.setText(d.nomecompleto)
	// 	},1000)
	// }

	sound_over.play()

}

function node_mouseout(d) {
	
	// label

	var text = d3.select('.label[label_id="' + d.id + '"]')
	//.classed('show', false)

	if(_.indexOf(['base','doc','orgao'], d.tipo) != -1){
		text.classed('hidden', false)
	}

	// links

	d3.selectAll('.mapa').classed('highlight', false)
	d3.selectAll('.link.' + d.id).classed('highlight', false)
	d3.selectAll('.node.' + d.id).classed('highlight', false)

	// tooltip

	//clearTimeout(fxto)
	fx.setText(d.nome)
	tooltip.classed('show', false)
}

function node_click(d) {
	sound_click.play()
	console.log('click', d)

	if(current_id == d.id){
		closeInfo()
	} else {
		if (d.tipo == 'orgao') {
			showInfoOrgao(d.id)
		} else if (d.tipo == 'base') {
			showInfoBase(d.id)
		} else {
			var base = _.find(graph.data.links, function(o) { return o.target == d.id })
			showInfoBase(base.source)
		}
	}
}

// INFO PANEL

var current_id = null

function showInfo(id) {

	var vis = d3.select(".mapa")
	vis.classed("show-info", true)

	// old
	d3.selectAll('.link.show').classed('show', false)
	d3.selectAll('.node.show').classed('show', false)
	d3.selectAll('.label.show').classed('show', false)

	// new 
	d3.selectAll('.link.' + id).classed('show', true)
	d3.selectAll('.node.' + id).classed('show', true)
	d3.selectAll('.label.' + id).classed('show', true)

	current_id = id

	doScroll( $('.mapa').offset().top )
}

function showInfoOrgao(id){

	console.log('open orgao',id)
	
	var info = d3.select('.mapa-info')
	var content = d3.select('.mapa-info-content')

	info.classed('is-loading',true)
	content.html('')

	var node = _.find(graph.nodes, function(o){ return id == o.id })

	d3.text("./data/orgaos/" + id + ".yml?v=" + now, function(error, text) {
		if (error) throw error
		var data = jsyaml.safeLoad(text)
		data.title = node.nomecompleto || node.nome
		content.html(template_orgaos(data))
		info.classed('is-loading',false)
	})

	showInfo(id)

}

function showInfoBase(id){
	
	console.log('open base',id)
	
	var info = d3.select('.mapa-info')
	var content = d3.select('.mapa-info-content')

	info.classed('is-loading',true)
	content.html('')

	var node = _.find(graph.nodes, function(o){ return id == o.id })

	d3.text("./data/bases/" + id + ".yml?v=" + now, function(error, text) {
		if (error) throw error
		var data = jsyaml.safeLoad(text)
		data.title = node.nomecompleto || node.nome
		content.html(template_bases(data))
		info.classed('is-loading',false)
	})

	showInfo(id)

	

}

function closeInfo(){

	vis = d3.select(".mapa")
	vis.classed("show-info", false)

	d3.selectAll('.link.show').classed('show', false)
	d3.selectAll('.node.show').classed('show', false)
	d3.selectAll('.label.show').classed('show', false)

	current_id = null

}

function doScroll(top){

	$('html, body').animate({scrollTop: top}, 300)

}

d3.select(".mapa-info-close").on("click",function(e){

	d3.event.preventDefault()

	sound_click.play()
	closeInfo()

})