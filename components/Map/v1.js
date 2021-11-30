import { useD3 } from '../../../hooks/useD3'
import * as S from './styled'
import * as d3 from 'd3'

function BarChart({ data }) {
  const ref = useD3(
    (svg) => {
      const height = 960;
      const width = 1280;

      svg 
        .select(".mapa-vis")
	      .attr("preserveAspectRatio", "xMinYMin meet")
	      .attr("viewBox", `0 0 ${width} ${height}`)

      svg.attr("viewBox", `0 0 ${width} ${height}`)

      svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "rgba(0,0,255,0)")
        .on("click", function() { closeInfo() })

      const viewport = svg.append("g").attr("class", "viewport")
      const manyBody = d3.forceManyBody()

      const simulation = d3.forceSimulation()
        // .force("charge", manyBody)
        .force("link", d3.forceLink().id(function(d) { 
					// console.log(d)
					return d.slug
				}))
        // .force("center", d3.forceCenter(width / 2, height / 2))
        // .force('collision', d3.forceCollide().radius(function(d) {
        //   return node_size(d) * 2.5
        // }))
        // .on("tick", ticked)
        // .alphaTarget(0.01)
        // .alphaDecay(0.1)
        // .alphaMin(0.0100000001)

      // Tooltip
      const tooltip = d3.select('.tooltip')

      // Utils
      // const color = d3.scaleOrdinal(d3.schemeCategory20)
      // const paleta = ['#c9b2fa','#ae92e9','#725f96','#ffc28f','#af7744','#ffc28f']

      // const templates = {
	    //   doc      : { size: 16, cluster: { y: 0.3, k: 4, size: 100 }, delay: 0, color: paleta[0] },
	    //   app      : { size:  5, cluster: { y: 1.2, k: 2, size:  60 }, delay: 1, color: paleta[1] },
	    //   base     : { size: 20, cluster: { y: 3.0, k: 4, size: 200 }, delay: 2, color: paleta[2] },
	    //   ti       : { size: 12, cluster: { y: 4.2, k: 3, size:  60 }, delay: 3, color: paleta[3] },
	    //   orgao    : { size: 16, cluster: { y: 5.4, k: 3, size:  80 }, delay: 4, color: paleta[4] },
	    //   politica : { size:  5, cluster: { y: 7.0, k: 4, size: 100 }, delay: 5, color: paleta[5] },
      // }

			const teste = data.categories
			let temp = []
			teste.map(function(d, i){
				temp.push({ tipo: d.title, size: d.min_size, cluster: { y: 3.0, k: 2, size: d.max_size }, delay: i, color: d.node_color })
		  })
			// console.log('templates: ', templates, 'temp: ', temp)


      function node_size(d, i){
				// console.log('size', d)
				return d.size
        // return templates[d.tipo].size + d.weight
				// return 20
      }
      
      // function node_color(t){
      //   return templates[t].color
      // }
      
      function node_cluster(t){
				// console.log('cluster', t)
				return t.cluster_k
        // return temp[t].cluster.y
      }
      
      // function node_delay(t,i){
      //   return templates[t].delay * 100 + i * 50
      // }

      // function tipo_label(t){
      //   switch(t){
      //     case 'orgao':
      //       return 'Órgão'
      //     case 'ti':
      //       return 'Operador de TI'
      //     case 'base':
      //       return 'Base'
      //     case 'politica':
      //       return 'Políticas Públicas'
      //     case 'app':
      //       return 'App'
      //     case 'doc':
      //       return 'Documento'
      //   }
      // }

      // Legendas ui EGENDAS UI
      // var legendas = [
      // 	{ y:   5, color: '#c9b2fa', text: 'Documentos', desc: "Documentos de identificação mais relevantes para o cidadão"},
      // 	{ y: 175, color: '#ae92e9', text: 'Aplicativos', desc: "O Brasil vive uma inflação de aplicativos móveis de identidade. Os principais constam neste mapa"},
      // 	{ y: 240, color: '#725f96', text: 'Bases', desc: "Repositórios de dados pessoais mais representativos e presentes no cotidiano do cidadão"},
      // 	{ y: 500, color: '#ffc28f', text: 'Operadores de TI', desc: "Instituições responsáveis pela sustentação operacional de soluções tecnológicas para os órgãos gestores"},
      // 	{ y: 640, color: '#af7744', text: 'Gestão', desc: "Órgãos que representam os mais importantes gestores de sistemas de identificação ou cadastros governamentais"},
      // 	{ y: 780, color: '#ffc28f', text: 'Serviços e Políticas Públicas', desc: "Lista não exaustiva de políticas públicas e serviços atrelados à rede mapeada"}
      // ]

      var legendas_g = viewport.append("g")
      	.attr("class", "legenda")
      	.selectAll('g')
      	.data(data.categories)

      var legenda = legendas_g.enter().append('g')

      legenda
      	.append('line')
      	.attr("class", 'legenda-line')
      	.attr("x1", 20 )
				.attr("y1", function(d) { return d.height_area })
      	.attr("x2", width - 20)
      	.attr("y2", function(d) { return d.height_area });
      
      legenda
      	.append('text')
      	.attr("class", 'legenda-text')
      	.text(function(d) { return d.title })
      	.attr('x', 20)
      	.attr('y', function(d){ return d.height_area + 25 })
      	.on("mouseover", legenda_mouseover)
      	.on("mouseout", legenda_mouseout)

        // GRAPH
        // var graph = {}
        var _links = viewport.append("g").attr("class", "links")
        var _nodes = viewport.append("g").attr("class", "nodes")
        var _labels = viewport.append("g").attr("class", "labels")

				const links = data.node_mapping
				const cat = data.categories
				let node = []

				// console.log(links)

				// const myArrayFiltered = temp.filter((el) => {
				// 	return node.some((f) => {
				// 		return f.tipo === el.tipo;
				// 	});
				// });
				// console.log('oi', myArrayFiltered);
	
				cat.map(function(d){
					d.nodes.map(function(p){
						// console.log('items', p, d)
						node.push({ 
							tipo: d.title, 
							size: d.min_size, 
							cluster_size: d.max_size, 
							cluster_k: 4, 
							slug: p.slug, 
							color: d.node_color, 
							nome: p.title, 
							nomecompleto: p.subtitle, 
							offsetY: 0 
						})
					})
				})
	
				// console.log(node, links, cat)

        // LOAD DATA
	    // d3.csv('/data-nodes.csv').row(d3.dsvParse).get(function(e){
			// 		console.log(e)
	    //     var _nodes = e
	    //     var _nodesori = []
	    //     _nodes.map(function(o){
	    //     	_nodesori.push(o)
	    //     })

			// 		console.log( 'node', _nodes )

	    //     d3.csv('data-links.csv').row(d3.dsvParse).get(function(p){
			// 			console.log('link', p)

		  //       var _relations = p
		  //       var _links = []
		  //       var _linksori = []

		  //       _relations.map(function(d){
		  //       	_links.push({base: d.base, source: d.source, relation: d.relation, target: d.target})	
		  //       	_linksori.push({base: d.base, source: d.source, relation: d.relation, target: d.target})	
		  //       })

			// 			// console.log(_relations)

		  //       var k = {
		  //       	app: 0,
		  //       	base: 0,
		  //       	doc: 0,
		  //       	orgao: 0,
		  //       	ti: 0,
		  //       	politica: 0,
		  //       	servico: 0
		  //       }

			// 			// console.log('templates', templates, templates['base'])

		  //       _nodes.map(function(d, i) {
			// 				// console.log(d.tipo)

			//         var loop = templates[d.tipo].cluster.size
			// 				// var loop = temp.cluster.size
			//         var step = loop / templates[d.tipo].cluster.k

			// 				console.log(d)

			// 				// _linksori.filter(function(o) { 
			//         // 	return o.target  == d.id || o.source  == d.id 
			//         // })

			// 				// console.log('temp', temp[1])
			// 				// console.log('loop', loop, 'step', step)

			// 				// console.log('k', k[d.tipo], k, d.tipo)

			//         d.offsetY = k[d.tipo]
			//         k[d.tipo] += step	
			//         k[d.tipo] = k[d.tipo] % loop

			//         var arr = _linksori.filter(function(o) { 
			//         	return o.target  == d.id || o.source  == d.id 
			//         })

			//         d.color = node_color(d.tipo)
			//         d.tipo_label = tipo_label(d.tipo)

			//         // d.rel_ids = _.uniq(_.map(arr,'base'))

			//         // if(d.tipo == 'ti'){
			// 	      //   var arr2 = d.filter(arr, function(o) { return o.relation == 'gestao' })
			// 	      //   d.weight = arr2.length * 4
			//         // } else {
			// 	      //   d.weight = arr.length
			//         // }
		  //       })

		  //       // MULTIPLE LINKS: START
		  //       _links.forEach( function(link) {
			// 				var same = _links.filter(function(){
			// 					return ({
			// 					'source': link.source,
			// 					'target': link.target
			// 					})
			// 				})

			//         same.forEach( function(s, i) {
			//         	if(!s.linkNum){
			//         		s.linkNum = (i + 1)
			//         	}
			//         })
		  //       })

			// 			console.log('nodes', _nodes)

		  //       // MULTIPLE LINKS: END
		  //       graph.nodes = _nodes
		  //       graph.links = _links
		  //       graph.data = {}
		  //       graph.data.nodes = _nodesori
		  //       graph.data.links = _linksori
		  //       // update(graph.nodes, graph.links)
	    //     })
      //   })


			// links.map(function(d, i) {
			// 	update(nodes, links)
			// 	console.log(d, i)
			// })

			// console.log('nodes - 1', node)

				update(node, links)

        function update(data_n, data_l){
        	var t = d3.transition().duration(750);
					var nodes  = _nodes.selectAll('.node').data(data_n, function(d) { return d.slug })
        	var labels = _labels.selectAll('.label').data(data_n, function(d) { return d.slug })
        	var links  = _links.selectAll('.link').data(data_l, function(d) { return d.source + '_' + d.target  })


					// console.log('links', nodes)


					// const templates = {
	        //   doc      : { size: 16, cluster: { y: 0.3, k: 4, size: 100 }, delay: 0, color: paleta[0] },
	        //   app      : { size:  5, cluster: { y: 1.2, k: 2, size:  60 }, delay: 1, color: paleta[1] },
	        //   base     : { size: 20, cluster: { y: 3.0, k: 4, size: 200 }, delay: 2, color: paleta[2] },
	        //   ti       : { size: 12, cluster: { y: 4.2, k: 3, size:  60 }, delay: 3, color: paleta[3] },
	        //   orgao    : { size: 16, cluster: { y: 5.4, k: 3, size:  80 }, delay: 4, color: paleta[4] },
	        //   politica : { size:  5, cluster: { y: 7.0, k: 4, size: 100 }, delay: 5, color: paleta[5] },
          // }

					// var k = {
					// 	app: 0,
					// 	base: 0,
					// 	doc: 0,
					// 	orgao: 0,
					// 	ti: 0,
					// 	politica: 0,
					// 	servico: 0
					// }
			
					// const loop = temp.filter(word => console.log('filter loop:', data_n.tipo, word) );
					// console.log('loop', loop)
					// const myArrayFiltered = temp.filter((el) => {
					//   return data_n.some((f) => {
					//     return f.tipo === el.tipo;
					//   });
					// });
					// console.log('oi', myArrayFiltered);

					// console.log('taina', temp, data_n)


					// var loop = templates[d.tipo].cluster.size
					// var loop = temp.cluster.size
					// var step = loop / templates[d.tipo].cluster.k

					let loop;
					let step;

					// const d = data_n

					data_n.map(function(d, i) {
						loop = d.cluster_size
					  step = loop / d.cluster_k
						d.offsetY = d.cluster_k
			      d.cluster_k += step	
			      d.cluster_k = d.cluster_k % loop
					})

				  console.log(data_n)
        
        	// NODES
        	nodes
        		.exit()
        		.transition(t)
        		.attr("r", 1e-6)
        		.remove()
        
        	nodes.enter()
        		.append("g")
        		.attr("class", function(d, i) {
							// console.log('node', d)
        			return "node " + d.slug 
							// + " " + d.rel_ids.join(" ")
        		})
        		.attr('node_id', function(d, i) {
        			return d.slug;
        		})
        		.append("circle")
        		.attr("r", 0)
        		// .on("mouseover", node_mouseover)
        		// .on("mouseout", node_mouseout)
        		// .on("click", node_click)
        		.transition(t)
						.delay(200)
        		// .delay(function(d, i) { return node_delay(d.tipo, i) })
        		.attr("r", function(d, i){ return node_size(d) } )
        		.attr("fill", function(d) { return d.color })

	        // LABELS
	        labels.enter()
	        	.append("g")
	        	.attr("class", function(d, i) {
	        		return "label node-" + d.tipo + " " + d.slug  
							// + " " + d.rel_ids.join(" ")
	        	})
	        	.attr('label_id', function(d, i) {
	        		return d.slug;
	        	})
	        	.attr('label_nome', function(d, i) {
	        		return d.nome
	        	})
	        	.append("text")
	        		.text(function(d, i) { return d.nome; })
	        		.attr("text-anchor", "middle")
	        		.attr('x', 0)
	        		.attr('y', function(d, i){ return node_size(d) + 16 })
	        		.attr("opacity", 0)
	        		.transition(t)
							.delay(200)
	        		// .delay(function(d, i) { return node_delay(d.tipo, i + 10) })
	        		.attr("opacity", 1)
					
	        labels.exit().remove()

					// LINKS - todo
					// links.exit().remove()
					// console.log(links)
					// links.enter()
					// 	.append("path")
					// 	.attr("class", "link")
					// 	.attr("class", function(d, i) {
					// 		console.log(d)
					// 		return d3.select(this).attr("class") + ' ' + d.context
					// 	})
					// 	.attr("opacity", 0)
					// 	.transition(t)
					// 	.delay(4000)
					// 	.attr("opacity", 1)

					// console.log('data n', data_n)

					// console.log(nodes, data_n)
					
					simulation
						.nodes(data_n)
						.force("link")
						.links(data_l)

						ticked()
				}

				function ticked() {

					simulation.alpha(0)

				  var nodes  = _nodes.select('.node')
					var links  = _links.select('.link')
					var labels = _labels.select('.label')

					// console.log('nodes - 2', nodes)
				
					if(nodes){
						// console.log(nodes)
						nodes.each(function(d, i) {
							// console.log('node_cluster', d)
							// console.log(d.offsetY)
							// console.log('taina')

							const ky = 0.1
							d.x -= (d.x - width / 2) * 8 * 0.0001;
							d.y -= (d.y + d.offsetY - (node_cluster(d) + 1) * 120) * 5 * ky;
							// d.y -= (d.y + d.offsetY - (node_cluster(d.tipo) + 1) * 120) * 5 * ky;
							// d.y -= (d.y + d.offsetY - (10 + 1) * 120) * 5 * ky;
					  })
						// console.log(1)
						nodes.attr("transform", function(d, i) {
							console.log('position nodes', i, d, d.x, d.y)
							// d.x = Math.max( Math.min( d.x, width - 100 ), 200 )
							return "translate(" + d.x + "," + d.y + ")";
						})

						nodes.attr("taina", function(d, i) {
							// console.log('position nodes', i, d, d.x, d.y)
							// d.x = Math.max( Math.min( d.x, width - 100 ), 200 )
							return i;
						})
					}
				
					// if(links){
					// 	links.attr("d", positionLink)
					// }
				
					if(labels){
						labels.attr("transform", function(d, i) {
							// console.log('position nodes', i, d, d.x, d.y)
							return "translate(" + d.x + "," + d.y + ")";
						})
					}
				}
				
				// TODO
				// function positionLink(d, i) {
				// 	// console.log('position', d)
				// 	var offset = 30 * d.linkNum;
				// 	var midpoint_x = (d.source.x + d.target.x) / 2;
				// 	var midpoint_y = (d.source.y + d.target.y) / 2;
				// 	var dx = (d.target.x - d.source.x);
				// 	var dy = (d.target.y - d.source.y);
				// 	var normalise = Math.sqrt((dx * dx) + (dy * dy));
				// 	var offSetX = midpoint_x + offset * (dy/normalise);
				// 	var offSetY = midpoint_y - offset * (dx/normalise);
				
				// 	return  "M" + d.source.x + "," + d.source.y +
				// 		"S" + offSetX + "," + offSetY +
				// 		" " + d.target.x + "," + d.target.y;
				// }

        // // DRAG
        // var drag_handler = d3.drag()
        // 	.on("start", drag_start)
        // 	.on("drag", drag_drag)
        // 	.on("end", drag_end)
        
        // function drag_start(d) {
        // 	if (!d3.event.active) simulation.alphaTarget(0.1).restart();
        // 	d.fx = d.x;
        // 	d.fy = d.y;
        // }
        
        // function drag_drag(d) {
        // 	d.fx = d3.event.x;
        // 	d.fy = d3.event.y;
        // }
        
        // function drag_end(d) {
        // 	if (!d3.event.active) simulation.alphaTarget(0.01);
        // 	d.fx = null;
        // 	d.fy = null;
        // }

        // // ZOOM
        // var zoom_handler = d3.zoom().on("zoom", zoom_actions)
        // function zoom_actions(){
        // 	viewport.attr("transform", d3.event.transform)
        // }
        // zoom_handler(svg)
        
        // // RESIZE
        // function resize() {
        // 	width = window.innerWidth
        // 	height = window.innerHeight
        // 	svg.attr("width", width).attr("height", height);
        // }

				// EVENTS
				function legenda_mouseover(d) {
					// if($(window).width() < 768) return
					// var svg_w = d3.select('.mapa-viewport').node().getBoundingClientRect().width
					// var scale = svg_w / width
				  // var top = 160 + (d.y + 50) * scale
					// * scale

					var top = (d.height_area + 40) 
					var left = 70
				
					d3.selectAll('.tooltip-title')
						.text(d.title)
						.style('color', d.node_color )
					
					d3.selectAll('.tooltip-text')
						.text(d.description)
						.style('color', '#fff' )
				
					tooltip
						.classed('show', true)
						.style('top', top + 'px')
						.transition()
						.duration(100)
						.style('left', left + 'px')
				}
        
        function legenda_mouseout(d) {
        	// if($(window).width() < 768) return
        	tooltip.classed('show', false)
        }

				// function node_mouseover(d, i) {
				// 	if($(window).width() < 768) return
				// 	var text = d3.select('.label[label_id="' + d.id + '"]')
				// 	if(d.indexOf(['base','doc','orgao','ti'], d.tipo) != -1){
				// 		text.classed('hidden',true)
				// 	}
				
				// 	// links
				// 	d3.selectAll('.mapa').classed('highlight', true)
				// 	d.forEach(d.rel_ids, function(id){
				// 		d3.selectAll('.link.' + id).classed('highlight',true)
				// 		d3.selectAll('.node.' + id).classed('highlight',true)
				// 	})
				
				// 	// tooltip
				// 	var svg_w = d3.select('.mapa-viewport').node().getBoundingClientRect().width
				// 	var scale = svg_w / width
				
				// 	var top = d.y < height * .8
				// 		? d.y * scale + (node_size(d[i]) * 0.5 + 30) * scale + 160
				// 		: d.y * scale - (node_size(d[i]) * scale + 90) + 160
				
				// 	var left = d.x < width * .75
				// 		? (d.x + 20) * scale
				// 		: (d.x - 20) * scale
				
				// 	// window safe area
				// 	left = Math.min(Math.max(180,left),width * scale - 180)
				
				// 	d3.selectAll('.tooltip-title')
				// 		.text(d.tipo_label)
				// 		.style('color', function(){ return d.color })
				
				// 	tooltip
				// 		.classed('show', true)
				// 		.style('top', top + 'px')
				// 		.transition()
				// 		.duration(100)
				// 		.style('left', left + 'px')

				// 	fx.setText(d.nomecompleto || d.nome)
				
				// 	sound_over.play()
				// }

        // function node_mouseout(d) {
        // 	if($(window).width() < 768) return
        
        // 	// label
        // 	var text = d3.select('.label[label_id="' + d.id + '"]')
        // 	if(d.indexOf(['base','doc','orgao','ti'], d.tipo) != -1){
        // 		text.classed('hidden', false)
        // 	}
        
        // 	// links
        // 	d3.selectAll('.mapa').classed('highlight', false)
        // 	d.forEach(d.rel_ids, function(id){
        // 		d3.selectAll('.link.' + id).classed('highlight',false)
        // 		d3.selectAll('.node.' + id).classed('highlight',false)
        // 	})
        
        // 	// tooltip
        // 	fx.setText(d.nome)
        // 	tooltip.classed('show', false)
        // }

				// function node_click(d) {
				// 	sound_click.play()
				
				// 	if(current_id == d.id){
				// 		closeInfo()
				// 	} else {
				// 		showInfo(d.tipo, d.id)
				// 		ga('send', 'event', 'node', 'click', d.tipo + " - " + d.nomecompleto) 
				// 	}
				// }

        // // INFO PANEL
        // var current_id = null
        // function showInfo(tipo, id) {
        // 	var vis = d3.select(".mapa")
        // 	vis.classed("show-info", true)
        
        // 	d3.selectAll('.link.show').classed('show', false)
        // 	d3.selectAll('.node.show').classed('show', false)
        // 	d3.selectAll('.label.show').classed('show', false)
        
        // 	var arr = tipo.filter(graph.data.links, function(o) { return o.target  == id || o.source  == id })
        // 	var bases = tipo.uniq(tipo.map(arr,'base'))
        
        // 	tipo.forEach(bases, function(base){
        // 		d3.selectAll('.link.' + base).classed('show', true)
        // 		d3.selectAll('.node.' + base).classed('show', true)
        // 		d3.selectAll('.label.' + base).classed('show', true)
        // 	})
        
        // 	var info = d3.select('.mapa-info')
        // 	var content = d3.select('.mapa-info-content')
        
        // 	info.classed('is-loading',true)
        // 	content.html('')
        
        // 	var node = tipo.find(graph.nodes, function(o){ return id == o.id })
        
        // 	d3.text("./data/info/" + tipo + '-' + id + ".yml", function(error, text) {
        // 		if (error) throw error
        // 		var data = jsyaml.safeLoad(text)
        // 		data.title = node.nomecompleto || node.nome
        // 		content.html(template_info(data))
        // 		info.classed('is-loading',false)
        // 	})
        
        // 	current_id = id
        // }

				function closeInfo(){
					const vis = d3.select(".mapa")
					vis.classed("show-info", false)
				
					d3.selectAll('.link.show').classed('show', false)
					d3.selectAll('.node.show').classed('show', false)
					d3.selectAll('.label.show').classed('show', false)
				
					// current_id = null
				}

				// d3.select(".mapa-info-close").on("click",function(e){
				// 	d3.event.preventDefault()
				// 	sound_click.play()
				// 	closeInfo()
				// })
    }
  );

  return (
    <S.Wrapper className="mapa-viewport">
      <svg ref={ref} className="mapa-vis" />

			<div className="tooltip">
        <div className="tooltip-wrapper">
          <div className="tooltip-title" style={{color: '#ae92e9'}}></div>
          <div className="tooltip-text"></div>
        </div>
      </div>

			{/* <div className="mapa-info">
          <a href="#" className="mapa-info-close">X</a>
          <div className="template-info">
            <p>title</p>
            <p>texto</p>
            <ul>
              <li>Eixos</li>
              <li>Gestão</li>
              <li>Operação de TI</li>
              <li>Canais de acesso pelo cidadão</li>
              <li>Legislação</li>
              <li>Usuário</li>
              <li>Mais informações</li>
            </ul>
          </div>
      </div> */}
    </S.Wrapper>
  );
}

export default BarChart;