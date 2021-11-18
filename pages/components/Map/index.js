import { useD3 } from '../../../hooks/useD3'
import useScript from '../../../hooks/useScript'
import * as S from './styled'
import * as d3 from 'd3'

function Chart({ data, query, baseUrl }) {
	useScript('https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js');
	useScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js');
	useScript('https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.14/howler.core.min.js');
	useScript('https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js');

	useScript('../vendors/jquery.mousewheel.min.js');
	useScript('../vendors/browser.js');
	useScript('../vendors/main.js');

	const ref = useD3(
    (svg) => {
	    const width = 1280 // window.innerWidth,
      const height = 960 // window.innerHeight;

      var svg = d3.select(".mapa-vis")
      	.attr("preserveAspectRatio", "xMinYMin meet")
      	.attr("viewBox", `0 0 ${width} ${height}`)
      
      svg.append("rect")
        .attr("class", "vis-background")
        .attr("width", width)
        .attr("height", height)
        .on("click", function() { closeInfo() })

			const viewport = svg.append("g").attr("class", "viewport")
      const simulation = d3.forceSimulation().force("link", d3.forceLink().id(function(d) { return d.id; }))

      // Tooltip
      const tooltip = d3.select('.tooltip')
      // var fx = new TextScramble(document.querySelector('.tooltip-text'), 15)
      // var fxto = null

      // UTILS
      const color = d3.scaleOrdinal(d3.schemeCategory20)
      const paleta = ['#c9b2fa','#ae92e9','#725f96','#ffc28f','#af7744','#ffc28f']
      
      const temp = {
      	0 : { size: 16, cluster: { y: 0.3, k: 4, size: 100 }, delay: 0, color: paleta[0] }, // doc
      	1 : { size:  5, cluster: { y: 1.2, k: 2, size:  60 }, delay: 1, color: paleta[1] }, // app
      	2 : { size: 20, cluster: { y: 3.0, k: 4, size: 200 }, delay: 2, color: paleta[2] }, // base
      	3 : { size: 12, cluster: { y: 4.2, k: 3, size:  60 }, delay: 3, color: paleta[3] }, // ti
      	4 : { size: 16, cluster: { y: 5.4, k: 3, size:  80 }, delay: 3, color: paleta[4] }, // orgao
      	5 : { size:  5, cluster: { y: 7.0, k: 4, size: 100 }, delay: 5, color: paleta[5] }, // politica
      }

      function node_size(d){
				console.log(d)
      	return temp[d.tipo].size + d.weight
      }
      
      function node_color(t){
      	return temp[t].color
      }
      
      function node_cluster(t){
      	return temp[t].cluster.y
      }
      
      function node_delay(t,i){
      	return temp[t].delay * 100 + i * 50
      }

      const orgao_scale = d3.scaleLinear()
      	.domain([1, 4])
      	.range(['#fcd9b2', '#e07145'])
      	.interpolate(d3.interpolateHcl)

			const legendas = data.categories
      const legendas_g = viewport.append("g")
      	.attr("class", "legenda")
      	.selectAll('g')
      	.data(legendas)
      
			const legenda = legendas_g.enter().append('g')
      
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
      const graph = {}
      const _links = viewport.append("g").attr("class", "links")
      const _nodes = viewport.append("g").attr("class", "nodes")
      const _labels = viewport.append("g").attr("class", "labels")
      
      const array_node = []
      const array_link = []
      const url = `${baseUrl}maps/${query}/`
      
      d3.json(url, function (json) {
      	const category = json.categories
      	const mapping = json.node_mapping

				// console.log(mapping)
      
      	category.map(function(nodes, idx){
      		const node = nodes.nodes
      		node.map(function(item, index){
      			array_node.push({
      				id: item.id,
      				nome: item.label,
      				nomecompleto: item.title,
      				tipo: nodes.order ? nodes.order : idx,
      				tipo_label: nodes.title,
      				decription: item.text,
      				x: item.x_position,
      				y: item.y_position,
      			})
      		})
      	})
      
	      const _nodes = array_node
	      const _nodesori = []
	      array_node.map(function(o){
	      	_nodesori.push(o)
	      })

	    	mapping.map(function(links){
	    		const result = array_node.filter(word => word.id == links.source.id);
	    		array_link.push({
	    			base: links.source.id,
	    			relation: result[0].tipo,
	    			source: links.source.id,
	    			target: links.target.id,
						context: links.context
	    		})
	    	})
			
	    	const _relations = array_link
	    	const _links = []
	    	const _linksori = []
			
	    	_relations.map(function(d){
	    		_links.push({base: d.base, source: d.source, relation: d.relation, target: d.target, context: d.context})	
	    		_linksori.push({base: d.base, source: d.source, relation: d.relation, target: d.target, context: d.context})	
	    	})

				const k = {
					0: 0, // doc
					1: 0, // app
					2: 0, // base
					3: 0, // ti
					4: 0, // orgao
					5: 0, // politica
				}
			
				_nodes.map(function(d){
					const loop = temp[d.tipo].cluster.size
					const step = loop / temp[d.tipo].cluster.k
				
					d.offsetY = k[d.tipo]
					k[d.tipo] += step
					k[d.tipo] = k[d.tipo] % loop
				
					d.x = Number(d.x)
					d.y = Number(d.y)
				
					const arr = _.filter(_linksori, function(o) { return o.target  == d.id || o.source  == d.id })
				
					d.color = node_color(d.tipo)

					d.rel_ids = _.uniq(_.map(arr, 'base'))
					d.context = _.uniq(_.map(arr, 'context'))
				
					if(d.tipo == 3){
						const arr2 = _.filter(arr, function(o) { return o.relation == 4 })
						d.weight = arr2.length * 4
					} else {
						d.weight = arr.length
					}
				})
			
				// MULTIPLE LINKS: START
				_.each(_links, function(link) {
					const same = _.filter(_links, {
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
				update(graph.nodes, graph.links)
			});

			function update(data_n,data_l){
				const t = d3.transition().duration(750);
				const nodes  = _nodes.selectAll('.node').data(data_n, function(d) { return d.id })
				const labels = _labels.selectAll('.label').data(data_n, function(d) { return d.id })
				const links  = _links.selectAll('.link').data(data_l, function(d) { return d.source + '_' + d.target })
			
				// NODES
				nodes
					.exit()
					.transition(t)
					.attr("r", 1e-6)
					.remove()
			
				nodes.enter()
					.append("g")
					.attr("class", function(d) {
						return "node node-" + d.id + " " + d.rel_ids.join(" ") + " " + "node-" + d.context.join(" node-")
					})
					.attr('node_id', function(d) {
						return d.id;
					})
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
						return "label node-" + d.tipo + " label-" + d.id + " " + d.rel_ids.join(" ") + " " + "label-" + d.context.join(" label-")
					})
					.attr('label_id', function(d) {
						return d.id;
					})
					.attr('label_nome', function(d) {
						return d.nome
					})
					.append("text")
						.text(function(d) { 
							const size = node_size(d)
							return size <= 10 ? '' : d.nome
						})
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
					.append("path")
					.attr("class", "link")
					.attr("class", function(d) {
						return d3.select(this).attr("class") + ' link-' + d.base  + " " + "link-" + d.context
					})
					.attr("opacity", 0)
					.transition(t)
					.delay(4000)
					.attr("opacity", 1)
				
				simulation
					.nodes(data_n)
					.force("link")
					.links(data_l)
				
				ticked()
			}

			function ticked() {
				simulation.alpha(0)
			
				const nodes  = _nodes.selectAll('.node')
				const links  = _links.selectAll('.link')
				const labels = _labels.selectAll('.label')
			
				if(nodes){
					nodes.attr("transform", function(d) {
						return "translate(" + d.x + "," + d.y + ")";
					})
				}
			
				if(links){
					links.attr("d", positionLink)
				}
			
				if(labels){
					labels.attr("transform", function(d) {
						return "translate(" + d.x + "," + d.y + ")";
					})
				}
			}

			function positionLink(d) {
				const offset = 30 * d.linkNum;
			
				const midpoint_x = (d.source.x + d.target.x) / 2;
				const midpoint_y = (d.source.y + d.target.y) / 2;
			
				const dx = (d.target.x - d.source.x);
				const dy = (d.target.y - d.source.y);
			
				const normalise = Math.sqrt((dx * dx) + (dy * dy));
			
				const offSetX = midpoint_x + offset * (dy/normalise);
				const offSetY = midpoint_y - offset * (dx/normalise);
			
				return  "M" + d.source.x + "," + d.source.y + "S" + offSetX + "," + offSetY + " " + d.target.x + "," + d.target.y;
			}

			// DRAG
			const drag_handler = d3.drag().on("start", drag_start).on("drag", drag_drag).on("end", drag_end)

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
			}

			function dblclick(d) {
				d.fx = null;
				d.fy = null;
			}

			// ZOOM
			const zoom_handler = d3.zoom().on("zoom", zoom_actions)
			function zoom_actions(){
				viewport.attr("transform", d3.event.transform)
			}

			// RESIZE
			function resize() {
				width = window.innerWidth
				height = window.innerHeight
				svg.attr("width", width).attr("height", height);
			}

      // EVENTS
      function legenda_mouseover(d) {
      	if($(window).width() < 768) return
      
      	const svg_w = d3.select('.mapa-viewport').node().getBoundingClientRect().width
      	const scale = svg_w / width
      	const top = 0 + (d.height_area + 50) * scale // 160
      	const left = 180
      
      	d3.selectAll('.tooltip-title')
      		.text(d.title)
      		.style('color', d.node_color )

				d3.selectAll('.tooltip-text')
      		.text(d.description)
      
      	tooltip
      		.classed('show', true)
      		.style('top', top + 'px')
      		.transition()
      		.duration(100)
      		.style('left', left + 'px')
      
      	// fx.setText(d.description)
      	sound_over.play()
      }

      function legenda_mouseout(d) {
      	if($(window).width() < 768) return
      	tooltip.classed('show', false)
      }

			function node_mouseover(d) {
				if($(window).width() < 768) return
			
				// label
				const text = d3.select('.label[label_id="' + d.id + '"]')
				if(_.indexOf([0, 1, 2, 3, 4, 5], d.tipo) != -1){ // 'base','doc','orgao','ti'
					text.classed('hidden',true)
				}

				console.log(d)
			
				// links
				d3.selectAll('.mapa').classed('highlight', true)
				// _.forEach(d.rel_ids, function(id){
				_.forEach(d.context, function(id) {
					d3.selectAll('.link.link-' + id).classed('highlight',true)
					d3.selectAll('.node.node-' + id).classed('highlight',true)
				})
			
				// tooltip
				const svg_w = d3.select('.mapa-viewport').node().getBoundingClientRect().width
				const scale = svg_w / width

				const top = d.y < height * .8
					? d.y * scale + (node_size(d) * 0.5 + 30) * scale + 0 // 160
					: d.y * scale - (node_size(d) * scale + 90) + 0 // 160
			
				let left = d.x < width * .75
					? (d.x + 20) * scale
					: (d.x - 20) * scale
			
				// window safe area
				left = Math.min(Math.max(180,left),width * scale - 180)
			
				d3.selectAll('.tooltip-title')
					.text(d.tipo_label)
					.style('color', function(){ return d.color })

				d3.selectAll('.tooltip-text')
      		.text(d.nomecompleto || d.nome)
			
				tooltip
					.classed('show', true)
					.style('top', top + 'px')
					.transition()
					.duration(100)
					.style('left', left + 'px')

				// fx.setText(d.nomecompleto || d.nome)
			
				sound_over.play()
			}

			function node_mouseout(d) {
				if($(window).width() < 768) return
			
				// label
				const text = d3.select('.label[label_id="' + d.id + '"]')
				if(_.indexOf([0, 1, 2, 3, 4, 5], d.tipo) != -1){ // 'base','doc','orgao','ti'
					text.classed('hidden', false)
				}
			
				// links
				d3.selectAll('.mapa').classed('highlight', false)
				// _.forEach(d.rel_ids, function(id){
				_.forEach(d.context, function(id){
					d3.selectAll('.link').classed('highlight', false)
					d3.selectAll('.node').classed('highlight', false)
				})
			
				// tooltip
				// fx.setText(d.nome)
				d3.selectAll('.tooltip-text')
      		.text(d.nome)
				tooltip.classed('show', false)
			}

			function node_click(d) {
				sound_click.play()
			
				if(current_id == d.id){
					closeInfo()
				} else {
					showInfo(d.tipo, d.id, d.context)

					console.log(d.tipo, d.id)
					// ga('send', 'event', 'node', 'click', d.tipo + " - " + d.nomecompleto) 
				}
			}

			// INFO PANEL
			let current_id = null

			function showInfo(tipo, id, context) {
				const w = $(window).width()
				const vis = d3.select(".mapa")
				vis.classed("show-info", true)

				// console.log(tipo, id, context)
			
				// old
				d3.selectAll('.link.show').classed('show', false)
				d3.selectAll('.node.show').classed('show', false)
				d3.selectAll('.label.show').classed('show', false)
			
				// new 
				const arr = _.filter(graph.data.links, function(o) { return o.target  == id || o.source  == id })
				const bases = _.uniq(_.map(arr,'context'))

				// "link-" + d.context
			
				_.forEach(bases, function(base){
				// _.forEach(bases, function(base){
					console.log(base)
					d3.selectAll('.link.link-' + base).classed('show', true)
					d3.selectAll('.node.node-' + base).classed('show', true)
					d3.selectAll('.label.label-' + base).classed('show', true)
				})
			
				const info = w < 768 ? d3.select('.mapa-info-mobile') : d3.select('.mapa-info')
				const content = w < 768 ? d3.select('.mapa-info-mobile-content') : d3.select('.mapa-info-content')
			
				info.classed('is-loading', true)
				content.html('')
			
				const items = array_node.filter(item => item.id == id);
			
				items.map(function(item) {
					content.html(`
					  <h3 class="title">${item.nomecompleto}</h3>
						${item.decription}
					`)
				  info.classed('is-loading', false)
				})
			
				current_id = id
			}

			function closeInfo(){
				const w = $(window).width()
				const vis = d3.select(".mapa")
				vis.classed("show-info", false)
			
				d3.selectAll('.link.show').classed('show', false)
				d3.selectAll('.node.show').classed('show', false)
				d3.selectAll('.label.show').classed('show', false)
			
				current_id = null
			
				if(w < 768) {
					d3.select('.mapa-info-mobile-content').html('')
				}
			}
			
			d3.select(".mapa-info-close").on("click",function(e){
				d3.event.preventDefault()
				sound_click.play()
				closeInfo()
			})

			function exportcsv(){
				const s = ''
				graph.nodes.map(function(el){
					s += el.tipo + ',' + el.id + ',' + el.nome + ',' + el.nomecompleto + ',' + Math.round(el.x) + ',' + Math.round(el.y) + '\n'
				})
			}
		}
	)

  return (
    <S.Wrapper>
			<section className="mapa exit">
        <div className="mapa-viewport">
          <svg className="mapa-vis" ref={ref} width="1280" height="960"></svg>
          <div className="tooltip">
            <div className="tooltip-wrapper">
              <div className="tooltip-title"></div>
              <div className="tooltip-text"></div>
            </div>
          </div>
        </div>

        <div className="mapa-info">
          <a href="#" className="mapa-info-close">+</a>
          <div className="mapa-info-content"></div>
          <div className="loading">...</div>
        </div>
      </section>
    </S.Wrapper>
  );
}

export default Chart;