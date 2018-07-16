// START VIS

var width = 960 //window.innerWidth,
var height = 960 //window.innerHeight;

var svg = d3.select("svg")
	.attr("preserveAspectRatio", "xMinYMin meet")
	.attr("viewBox", `0 0 ${width} ${height}`)


var sound_over = new Howl({ src: ['./snd/mouseclick1.wav'] })
var sound_click = new Howl({ src: ['./snd/switch37.wav'] })

var viewport = svg.append("g")
	.attr("class", "viewport")

var manyBody = d3.forceManyBody()

manyBody.strength(200)
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

var tooltip = d3.select('.tooltip')
var fx = new TextScramble(document.querySelector('.tooltip-text'),15)
var fxto = null

var graph = {}

var _links = viewport.append("g")
	.attr("class", "links")

var _nodes = viewport.append("g")
	.attr("class", "nodes")

var _labels = viewport.append("g")
	.attr("class", "labels")

var _fxs = {}

// LOAD DATA

d3.csv('./data/data-nodes.csv')
  .row(d3.dsvParse).get(function(d){

	var _nodes = d

	d3.csv('./data/data-links.csv')
	  .row(d3.dsvParse).get(function(d){

		var _relations = d
		var _links = []
		var _linksori = []
		
		_relations.map(function(d){
			_links.push({source: d.source, target: d.target})	
			_linksori.push({source: d.source, target: d.target})	
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
			var step = d.tipo == 'base' ? 50 : 25
			var loop = d.tipo == 'base' ? 200 : 125
			d.offsetY = k[d.tipo]
			k[d.tipo] += step
			k[d.tipo] = k[d.tipo] % loop
			// radius
			if(d.tipo == 'base'){
				var arr = _.filter(_linksori, function(o) { return o.source  == d.id })
				d.links = arr.length
			} else {
				var arr = _.filter(_linksori, function(o) { return o.target  == d.id })
				d.links = arr.length
			}
		})

		//console.log(_nodes)

		graph.nodes = _nodes
		graph.links = _links
		
		update(graph.nodes, graph.links)
	})
})

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
				d.x = Math.max(Math.min(d.x,width-100),100)
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

	var offset = 30;

	var midpoint_x = (d.source.x + d.target.x) / 2;
	var midpoint_y = (d.source.y + d.target.y) / 2;

	var dx = (d.target.x - d.source.x);
	var dy = (d.target.y - d.source.y);

	var normalise = Math.sqrt((dx * dx) + (dy * dy));

	var offSetX = midpoint_x + offset*(dy/normalise);
	var offSetY = midpoint_y - offset*(dx/normalise);

	return  "M" + d.source.x + "," + d.source.y +
			"S" + offSetX + "," + offSetY +
			" " + d.target.x + "," + d.target.y;
}

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
		.attr("class", "node")
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
		.attr("fill", function(d) { return node_color(d.tipo); })
		

	// LABELS

	labels.enter()
		.append("g")
		.attr("class", "label")
		.attr("class", function(d) { return d3.select(this).attr("class") + " node-" + d.tipo; })
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

function node_click(d) {
	sound_click.play()
	console.log('click', d)
}

function node_mouseover(d) {

	// label

	var text = d3.select('.label[label_id="' + d.id + '"]')
		//.classed('show', true)

	if(d.tipo != 'base' && d.tipo != 'doc' ){
		
	} else {
		text.classed('hidden',true)
	}

	// links

	d3.selectAll('.links').classed('is_highlight', true)
	d3.selectAll('.link.' + d.id).classed('highlight',true)

	// tooltip

	var svg_w = d3.select('.overlay').node().getBoundingClientRect().width
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

	d3.selectAll('.tooltip-title')
		.text(tipo_label(d.tipo))
		.style('color', node_color(d.tipo))

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
		.classed('show', false)

	if(d.tipo != 'base' && d.tipo != 'doc' ){	
		
	} else {
		text.classed('hidden', false)
	}

	// links

	d3.selectAll('.links').classed('is_highlight', false)
	d3.selectAll('.link.' + d.id).classed('highlight', false)

	// tooltip

	//clearTimeout(fxto)
	fx.setText(d.nome)
	tooltip.classed('show', false)	
}

// UTILS

var color = d3.scaleOrdinal(d3.schemeCategory20)

var templates = {
	doc      : { size: 15, cluster_y: 1.0, delay: 0, color: 1 },
	app      : { size:  5, cluster_y: 2.3, delay: 5, color: 2 },
	base     : { size: 20, cluster_y: 4.0, delay: 1, color: 3 },
	orgao    : { size: 10, cluster_y: 6.0, delay: 2, color: 4 },
	servico  : { size:  5, cluster_y: 7.0, delay: 3, color: 5 },
	politica : { size:  5, cluster_y: 7.5, delay: 4, color: 6 },
}


function node_size(d){
	var extra = d.tipo == 'base' ? d.links : d.links * 2
	return templates[d.tipo].size + extra
}

function node_color(t){
	return color(templates[t].color)
}

function node_cluster(t){
	return templates[t].cluster_y
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