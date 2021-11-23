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

			// let category = data.categories

			// category.filter(word => word.show == false);

			// console.log(category)

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
      
      // const temp = {
      // 	0 : { size: 16, cluster: { y: 0.3, k: 4, size: 100 }, delay: 0, color: paleta[0] }, // doc
      // 	1 : { size:  5, cluster: { y: 1.2, k: 2, size:  60 }, delay: 1, color: paleta[1] }, // app
      // 	2 : { size: 20, cluster: { y: 3.0, k: 4, size: 200 }, delay: 2, color: paleta[2] }, // base
      // 	3 : { size: 12, cluster: { y: 4.2, k: 3, size:  60 }, delay: 3, color: paleta[3] }, // ti
      // 	4 : { size: 16, cluster: { y: 5.4, k: 3, size:  80 }, delay: 3, color: paleta[4] }, // orgao
      // 	5 : { size:  5, cluster: { y: 7.0, k: 4, size: 100 }, delay: 5, color: paleta[5] }, // politica
      // }

			const temp = {
      	0 : { cluster: { y: 0.3, k: 4, }, delay: 0 }, // doc
      	1 : { cluster: { y: 1.2, k: 2, }, delay: 1 }, // app
      	2 : { cluster: { y: 3.0, k: 4, }, delay: 2 }, // base
      	3 : { cluster: { y: 4.2, k: 3, }, delay: 3 }, // ti
      	4 : { cluster: { y: 5.4, k: 3, }, delay: 3 }, // orgao
      	5 : { cluster: { y: 7.0, k: 4, }, delay: 5 }, // politica
      }

      function node_size(d){
				// console.log(d)
      	// return temp[d.tipo].size + d.weight

				return d.min_size + d.weight
      }

			function node_size_before(d, i){
				// console.log(d)
      	// return temp[d.tipo].size + d.weight

				return d.min_size + d.weight
      }

		
      
      // function node_color(t){
      // 	return temp[t].color
      // }
      
      // function node_cluster(t){
      // 	return temp[t].cluster.y
      // }
      
      function node_delay(t,i){
      	return temp[t].delay * 100 + i * 50
      }

      const orgao_scale = d3.scaleLinear()
      	.domain([1, 4])
      	.range(['#fcd9b2', '#e07145'])
      	.interpolate(d3.interpolateHcl)

			const legendas = data.categories

			// console.log(data, legendas)

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

				// console.log('category', category)

				// if()
      
      	category.map(function(nodes, idx){
      		const node = nodes.nodes

				// console.log('nodes', nodes)

				// if(nodes.show){

      		node.map(function(item, index){

						

						const space = nodes.min_size ? nodes.min_size * index : 5 * index

						// const real_size = return node_size(nodes) 

						// console.log( item.label, index, space, nodes )


						// TODO: Colocar identificador do index de cada coluna aqui


						
      			array_node.push({
							show: nodes.show,
      				id: item.id,
      				nome: item.label,
      				nomecompleto: item.title,
							color: nodes.node_color ? nodes.node_color : idx < 6 ? paleta[idx] : '#c9b2fa',
      				tipo: nodes.order ? nodes.order : idx,
      				tipo_label: nodes.title,
      				decription: item.text ? item.text : '',
							button_icon: item.button_icon ? item.button_icon.url : null,
							button_link: item.button_link ? item.button_link : null,
							button_text: item.button_text ? item.button_text : null,
							x_position: item.x_position,
      				y_position: item.y_position,
      				x: item.x_position ? item.x_position + 160 : 160 + space,
      				y: item.y_position ? item.y_position + nodes.height_area : nodes.height_area + 20,
							min_size: nodes.min_size ? nodes.min_size : 5,
							max_size: nodes.max_size ? nodes.max_size : 50
      			})
      		})

				  //}

      	})

			// }
      
	      const _nodes = array_node
	      const _nodesori = []
	      array_node.map(function(o){
	      	_nodesori.push(o)
	      })

				// console.log(array_node)

	    	mapping.map(function(links){
	    		const result = array_node.filter(word => word.id == links.source.id);
					// console.log(links)
	    		array_link.push({
	    			base: links.source.id,
	    			// relation: result[0] ? result[0].tipo : 0,
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
			
				_nodes.map(function(d, i){

					// console.log(d)


					// const loop = temp[d.tipo].cluster.size

					const loop = d.max_size

					


					const step = loop / temp[d.tipo].cluster.k
				
					d.offsetY = k[d.tipo]
					k[d.tipo] += step
					k[d.tipo] = k[d.tipo] % loop
				
					d.x = Number(d.x)
					d.y = Number(d.y)
				
					const arr = _.filter(_linksori, function(o) { return o.target  == d.id || o.source  == d.id })
				
					// d.color = node_color(d.tipo)

					

					d.rel_ids = _.uniq(_.map(arr, 'base'))
					d.context = _.uniq(_.map(arr, 'context'))

					// console.log(arr)
				
					if(d.tipo == 3){
						const arr2 = _.filter(arr, function(o) { return o.relation == 4 })
						d.weight = arr2.length * 4
					} else {
						d.weight = arr.length
					}

					// console.log(d.x_position, d, i, category)


					if(d.x_position == undefined) {
						// console.log(1)
						const index = i == 0 ? 0 : i - 1
					  const real_size = ( ( d.min_size + _nodes[index].weight ) * 2 ) + 10
					  const space = real_size * i 

						// console.log(real_size, space)

						d.x = d.x_position ? d.x_position + 160 : 160 + space
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

				// console.log(_links)

				// if(data_n.show){
				update(graph.nodes, graph.links)
				// }
			});

			function update(data_n,data_l){
				const t = d3.transition().duration(750);
				const nodes  = _nodes.selectAll('.node').data(data_n, function(d) { return d.id })
				const labels = _labels.selectAll('.label').data(data_n, function(d) { return d.id })
				const links  = _links.selectAll('.link').data(data_l, function(d) { return d.source + '_' + d.target })

				// console.log(data_n)

				
			
				// NODES
				nodes
					.exit()
					.transition(t)
					.attr("r", 1e-6)
					.remove()
			
				nodes.enter()
					.append("g")
					.attr("class", function(d) {
						const itemName = d.context ? d.context : d.rel_ids
						// return "node node-" + d.id + " " + d.rel_ids.join(" ") + " " + "node-" + d.context.join(" node-")
						return "node node-" + d.id + " " + d.rel_ids.join(" ") + " " + "node-" + itemName.join(" node-")
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
						const itemName = d.context ? d.context : d.rel_ids
						// return "label node-" + d.tipo + " label-" + d.id + " " + d.rel_ids.join(" ") + " " + "label-" + d.context.join(" label-")
						return "label node-" + d.tipo + " label-" + d.id + " " + d.rel_ids.join(" ") + " " + "label-" + itemName.join(" label-")
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
						const itemName = d.context ? d.context : d.rel_ids
						// return d3.select(this).attr("class") + ' link-' + d.base  + " " + "link-" + d.context
						return d3.select(this).attr("class") + ' link-' + d.base  + " " + "link-" + itemName
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
						// console.log('nodes', d)
						return "translate(" + d.x + "," + d.y + ")";
					})
				}
			
				if(links){
					links.attr("d", positionLink)
				}
			
				if(labels){
					labels.attr("transform", function(d) {
						// console.log('labels', d)
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
					// .style('color', d.node_color )
      		.style('color', d.color )

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

			function node_mouseover(d, idx) {
				if($(window).width() < 768) return
			
				// label
				const text = d3.select('.label[label_id="' + d.id + '"]')
				if(_.indexOf([0, 1, 2, 3, 4, 5], d.tipo) != -1){ // 'base','doc','orgao','ti'
					text.classed('hidden',true)
				}
			
				// links
				d3.selectAll('.mapa').classed('highlight', true)

				const itemName = d.context[idx] != undefined ? d.context : d.rel_ids

				// const oi = d.context ? 'tem' : 'nao tem'

				// console.log(itemName, oi,  d, d.context, d.context[idx])

				// _.forEach(d.rel_ids, function(id){
				_.forEach(itemName, function(id) {
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

			function node_mouseout(d, idx) {
				if($(window).width() < 768) return
			
				// label
				const text = d3.select('.label[label_id="' + d.id + '"]')
				if(_.indexOf([0, 1, 2, 3, 4, 5], d.tipo) != -1){ // 'base','doc','orgao','ti'
					text.classed('hidden', false)
				}
			
				// links
				d3.selectAll('.mapa').classed('highlight', false)

				// const itemName = d.context ? d.context : d.rel_ids
				const itemName = d.context[idx] != undefined ? d.context : d.rel_ids

				// _.forEach(d.rel_ids, function(id){
				_.forEach(itemName, function(id){
					d3.selectAll('.link').classed('highlight', false)
					d3.selectAll('.node').classed('highlight', false)
				})
			
				// tooltip
				// fx.setText(d.nome)
				d3.selectAll('.tooltip-text')
      		.text(d.nome)
				tooltip.classed('show', false)
			}

			function node_click(d, idx) {
				// const itemName = d.context ? d.context : d.rel_ids

				const itemName = d.context[idx] != undefined ? d.context : d.rel_ids

				const name = d.context[idx] != undefined ? 'context' : 'ids'

				sound_click.play()
			
				if(current_id == d.id){
					closeInfo()
				} else {
					showInfo(d.tipo, d.id, itemName, name)
					// ga('send', 'event', 'node', 'click', d.tipo + " - " + d.nomecompleto) 
				}
			}

			// INFO PANEL
			let current_id = null

			function showInfo(tipo, id, context, name) {
				const w = $(window).width()
				const vis = d3.select(".mapa")
				// const itemName = context[0] != undefined ? context : id

				vis.classed("show-info", true)

				// console.log(tipo, id, context)
			
				// old
				d3.selectAll('.link.show').classed('show', false)
				d3.selectAll('.node.show').classed('show', false)
				d3.selectAll('.label.show').classed('show', false)
			
				// new 
				// const itemName = d.context ? d.context : d.rel_ids

				// console.log('oi', context, id)

				const arr = _.filter(graph.data.links, function(o) { return o.target  == id || o.source  == id })
				const bases = name == 'context' ? _.uniq(_.map(arr,'context')) : _.uniq(_.map(arr,'base')) 

				// const oi = context[0] != undefined ? 'context' : 'base'

				// console.log(bases, oi)

				// "link-" + d.context
			
				_.forEach(bases, function(base){
				// _.forEach(bases, function(base){
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

						${item.button_link ? `<a href="${item.button_link}" target="_blank" class="btn">
						  <span>${item.button_text}</span>
							${item.button_icon ? `<img src="${item.button_icon}" alt="${item.button_text}" />` : '' }
						</a>` : '' }
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