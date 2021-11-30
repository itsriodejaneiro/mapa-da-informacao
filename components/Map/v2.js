import { useD3 } from '../../../hooks/useD3'
import * as S from './styled'
import * as d3 from 'd3'

function Chart({ data }) {
  const ref = useD3(
    (svg) => {
      const height = 960;
      const width = 1280;

      svg 
        .select(".mapa-vis")
	      .attr("preserveAspectRatio", "xMinYMin meet")
	      // .attr("viewBox", `0 0 ${width} ${height}`)

      svg.attr("viewBox", `0 0 ${width} ${height}`)

      svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "")
        .on("click", function() { closeInfo() })

      const viewport = svg.append("g").attr("class", "viewport")
      const manyBody = d3.forceManyBody()

      const simulation = d3.forceSimulation()
        .force("charge", manyBody)
        .force("link", d3.forceLink().id(function(d) { 
					return d.slug
				}))
        .force("center", d3.forceCenter(width / 2, height / 2))
	      .force('collision', d3.forceCollide().radius(function(d) {
	      	return node_size(d) * 2.5
	      }))
	      .on("tick", ticked)
	      .alphaTarget(0.01)
	      .alphaDecay(0.1)
	      .alphaMin(0.0100000001)

      // Tooltip
      const tooltip = d3.select('.tooltip')

			const teste = data.categories
			let temp = []
			teste.map(function(d, i){
				temp.push({ tipo: d.title, size: d.min_size, cluster: { y: 3.0, k: 2, size: d.max_size }, delay: i, color: d.node_color })
		  })

      function node_size(d, i){
				return d.size
      }
      
      // function node_cluster(t){
			// 	return t.cluster_k
      // }

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
	
				cat.map(function(d){
          console.log('category', d)
					d.nodes.map(function(p){
						node.push({ 
							tipo: d.title, 
							size: d.min_size, 
							cluster_size: d.max_size, 
							cluster_k: 4, 
              height: d.height_area,
							slug: p.slug, 
							color: d.node_color, 
							nome: p.label, 
							nomecompleto: p.subtitle, 
							offsetY: 0 
						})
					})
				})

				update(node, links)
        function update(data_n, data_l){
        	var t = d3.transition().duration(750);
					var nodes  = _nodes.selectAll('.node').data(data_n, function(d) { return d.slug })
        	var labels = _labels.selectAll('.label').data(data_n, function(d) { return d.slug })
        	var links  = _links.selectAll('.link').data(data_l, function(d) { return d.source + '_' + d.target  })

          console.log('link', links)

					let loop;
					let step;

					data_n.map(function(d, i) {
						loop = d.cluster_size
					  step = loop / d.cluster_k
						d.offsetY = d.cluster_k
			      d.cluster_k += step	
			      d.cluster_k = d.cluster_k % loop
						// .log('loop', loop, 'step', step, 'offsetY', d.offsetY, 'k', d.cluster_k)
					})

				  // console.log(data_n)
        
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
        			return "node " 
              // + d.slug 
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
					links.exit().remove()
					// console.log(links)
					links.enter()
						.append("path")
						.attr("class", "link")
						.attr("class", function(d, i) {
							// console.log(d)
							return d3.select(this).attr("class") + ' ' + d.context
						})
						// .attr("opacity", 0)
						.transition(t)
						.delay(4000)
            .attr("fill", '#fff')
						.attr("opacity", 1)
					
					simulation
						.nodes(data_n)
						.force("link")
						.links(data_l)
				}

				function ticked() {
					simulation.alpha(0)

				  var nodes  = _nodes.selectAll('.node')
					var links  = _links.selectAll('.link')
					var labels = _labels.selectAll('.label')

					if(nodes){
						nodes.each(function(d, i) {
              const marginLeft = 20 + 120
              const marginTop = 20

              console.log('dx', d.x, 'dy', d.y)

              // d.x = d.x + d.cluster_k + marginLeft + d.size
							// d.y = d.y + d.height + d.size + marginTop

              d.x = d.x * 0.1 + marginLeft + d.cluster_k + d.size
							d.y = d.y * 0.06 + d.height
					  
              nodes.attr("transform", function(d, i) {
							  return "translate(" + d.x + "," + d.y + ")";
						  })
            })
					}

					if(labels){
            labels.each(function(d, i) {
              labels.attr("transform", function(d, i) {
							  return "translate(" + d.x + "," + d.y + ")";
						  })
            })
					}

          if(links){
						links.attr( "d", positionLink )
					}
				}

        // TODO
				function positionLink(d, i) {
					console.log('position', d)

					var offset = 30 * (i + 1)
          // d.linkNum;
					var midpoint_x = (d.source.x_position + d.target.x_position) / 2
					var midpoint_y = (d.source.y_position + d.target.y_position) / 2
					var dx = (d.target.x_position - d.source.x_position)
					var dy = (d.target.y_position - d.source.y_position)

          console.log(i, 'offset', offset, 'midpoint_x', midpoint_x, 'midpoint_y', midpoint_y, 'dx', dx, 'dy', dy)

					var normalise = Math.sqrt((dx * dx) + (dy * dy));
					var offSetX = midpoint_x + offset * (dy/normalise);
					var offSetY = midpoint_y - offset * (dx/normalise);
				
					return  "M" + d.source.x_position + "," + d.source.y_position +
						"S" + offSetX + "," + offSetY +
						" " + d.target.x_position + "," + d.target.y_position;
				}


				
        // RESIZE
        function resize() {
        	width = window.innerWidth
        	height = window.innerHeight
        	svg.attr("width", width).attr("height", height);
        }

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

				function closeInfo(){
					const vis = d3.select(".mapa")
					vis.classed("show-info", false)
				
					d3.selectAll('.link.show').classed('show', false)
					d3.selectAll('.node.show').classed('show', false)
					d3.selectAll('.label.show').classed('show', false)
				}
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
    </S.Wrapper>
  );
}

export default Chart;