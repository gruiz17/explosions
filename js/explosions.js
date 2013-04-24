//the main concert function.
var w=window.innerWidth,
	h=window.innerHeight,
	z = d3.scale.category20b(),
	onOff = 0,
	i=0,
	j=1,
	refreshInterval=[];


var svg = d3.select("body").append("svg:svg").attr("width",w).attr("height",h).style("pointer-events", "all");

function setEventHandler(visualName, eventName) {
	console.log(visualName, eventName);
	var visual = visuals[visualName];
	svg.on(eventName, function(){visual(d3.mouse(this));});
}

function setEventHandlerFromMenuOption(element, eventName) {
	var visualName = element.value;
	setEventHandler(visualName, eventName);
}

$(document).ready(function() {
	setEventHandler('yoloSwag', 'mousedown');
	setEventHandler('yoloSwag', 'mousemove');
    $("#mousemoveSelector").change(function() {
        setEventHandlerFromMenuOption(this, 'mousemove');
    });
    $("#mousedownSelector").change(function() {
        setEventHandlerFromMenuOption(this, 'mousedown');
    });
});

visuals = {
	yoloSwag: function(m) {
		svg.append("svg:text")
		.text("#yoloswag")
		.attr("font-size","16").attr("font-family","Lato").attr("fill","#ffffff").attr("fill-opacity",1)
		.attr("x",m[0]).attr("y",m[1])
		.transition().duration(500).ease(Math.sqrt)
		.attr("font-size","28")
		.attr("x", m[0]-50).attr("y",m[1]-50).attr("fill-opacity",.1)
		.remove()
	},

	hexagon: function(m) {
		var initRotate=0;
		for (var k=0; k < 6; k++)
		{
			var curmx = m[0], curmy = m[1];
			svg.append("svg:circle")
			.attr("transform","rotate(" + initRotate + ", " + curmx + "," + curmy +")")
			.attr("cx",curmx)
			.attr("cy",curmy)
			.attr("r", 10)
			.style("stroke",z(++i))
			.style("fill", z(++i))
			.transition().duration(500).ease(Math.sqrt).attr("cx",curmx + 200).attr("cy", curmy + 200)
			.transition().duration(500).ease(Math.sqrt).attr("cx",curmx - 200)
			.transition().duration(500).ease(Math.sqrt).attr("cx",curmx - 200).attr("cy",curmy - 200)
			.transition().duration(500).ease(Math.sqrt).attr("cy",curmy - 200).attr("cx",curmx + 200)
			.transition().duration(500).ease(Math.sqrt).attr("cx",curmx + 200).attr("cy", curmy + 200)
			.transition().duration(500).ease(Math.sqrt).attr("cx",curmy+200).attr("cy",curmy - 200)
				.style("stroke-opacity",1e-6).style("fill-opacity", 1e-6).remove()
			initRotate+=60;
		}
	},

	triangles: function(m) {
		var curmx = m[0], curmy = m[1];

		var p1init = (curmx-20) + " " + (curmy)
		var p2init = curmx + " " + (curmy-40)
		var p3init = (curmx+20) + " " + (curmy)

		var p1 = (curmx-50) + " " + (curmy-100)
		var p2 = curmx + " " + (curmy-250)
		var p3 = (curmx+50) + " " + (curmy-100)

		for (var k = 0; k < 3; k++)
		{
			svg.append("svg:path")
			.attr("d", "M " + p1init + " L "+p2init + " L "+p3init + " L " + p1init)
			.style("stroke", z(++i))
			.style("stroke-opacity",1).style("stroke-width","5px").style("fill-opacity",0).transition().duration(500).ease(Math.sqrt)
			.attr("d", "M " + p1 + " L "+p2 + " L "+p3 + " L " + p1)
			.style("stroke-opacity",1e-6).remove();

			svg.append("svg:path")
			.attr("transform","rotate(125, " + curmx + "," + curmy +")")
			.attr("d", "M " + p1init + " L "+p2init + " L "+p3init + " L " + p1init)
			.style("stroke", z(++i)).style("stroke-opacity",1).style("stroke-width","5px").style("fill-opacity",0)
			.transition().duration(500).ease(Math.sqrt)
			.attr("d", "M " + p1 + " L "+p2 + " L "+p3 + " L " + p1)
			.style("stroke-opacity",1e-6).remove();

			svg.append("svg:path")
			.attr("transform","rotate(235, " + curmx + "," + curmy +")")
			.attr("d", "M " + p1init + " L "+p2init + " L "+p3init + " L " + p1init)
			.style("stroke", z(++i)).style("stroke-opacity",1).style("stroke-width","5px").style("fill-opacity",0)
			.transition().duration(500).ease(Math.sqrt)
			.attr("d", "M " + p1 + " L "+p2 + " L "+p3 + " L " + p1)
			.style("stroke-opacity",1e-6).remove();
		}
	},

	bigLines: function(m) {
		var swag = [0,0,0,0,0]
		var k;
		for (k=0; k < swag.length; k++) {
			var curmx = m[0],
				curmy = m[1],
				randx = Math.floor(Math.random()*2000)-1000,
				randy = Math.floor(Math.random()*2000)-1000;
				thunnidx=300,
				thunnidy=300;

			if (randx < 0){
				thunnidx *= -1;
			}

			if (randy < 0){
				thunnidy*=-1;
			}

			svg.append("svg:line")
			.attr("x1",m[0]).attr("y1",m[1]).attr("x2",m[0]).attr("y2",m[1])
			.style("stroke",z(++i)).style("stroke-width", "10px")
			.transition()
				.duration(1000).ease(Math.sqrt)
				.attr("x1",m[0]+randx).attr("y1",m[1]+randy).attr("x2",m[0]+randx+thunnidx).attr("y2",m[1]+randy+thunnidy)
				.style("stroke-opacity",.1).remove();
		}
	},

	confetti: function(m) {
		var swag = [0,0,0,0,0]
		var k;
		for (k=0; k < swag.length; k++)
		{
			var curmx = m[0],
				curmy = m[1],
				randx = Math.floor(Math.random()*2000)-1000,
				randy = Math.floor(Math.random()*2000)-1000;
				thunnidx=30,
				thunnidy=30;

			if (randx < 0){
				thunnidx *= -1;
			}

			if (randy < 0){
				thunnidy*=-1;
			}



			svg.append("svg:line")
			.attr("x1",m[0])
			.attr("y1",m[1])
			.attr("x2",m[0])
			.attr("y2",m[1])
			.style("stroke",z(++i))
			.style("stroke-width", "10px")
			.transition()
				.duration(1000)
				.ease(Math.sqrt)
				.attr("x1",m[0]+randx)
				.attr("y1",m[1]+randy)
				.attr("x2",m[0]+randx+thunnidx)
				.attr("y2",m[1]+randy+thunnidy)
				.style("stroke-opacity",.1)
				.remove();
		}
	},

	jazz: function(m) {
		var swag = [0,0,0,0,0]
		var k;
		for (k = 0; k < swag.length; k++)
		{
		var curmx = m[0],
			curmy = m[1]
		svg.append("svg:circle")
			.attr("cx",curmx)
			.attr("cy",curmy)
			.attr("r",6)
			.style("stroke",z(++i))
			.style("fill",z(++i))
			.transition()
			.duration(800)
			.ease(Math.sqrt)
			.attr("cx",curmx+Math.floor(Math.random()*200)-100)
			.attr("cy",curmy+Math.floor(Math.random()*200)-100)
			.style("stroke-opacity",1e-6)
			.style("fill-opacity",1e-6)
			.remove();
		}
	},

	drawing: function(m) {
		var swag = [0,0,0,0,0,0,0]
		var k;
		for (k = 0; k < swag.length; k++)
		{
		var curmx = m[0],
			curmy = m[1]
		svg.append("svg:circle")
			.attr("cx",curmx)
			.attr("cy",curmy)
			.attr("r",4)
			.style("stroke","#00FFFF")
			.style("fill","#00FFFF")
			.transition()
			.delay(2000)
			.duration(800)
			.attr("cx",curmx+Math.floor(Math.random()*200)-100)
			.attr("cy",curmy+Math.floor(Math.random()*200)-100)
			.style("stroke",z(++i))
			.style("fill",z(++i))
			.style("stroke-opacity",1e-6)
			.style("fill-opacity",1e-6)
			.remove();
		}
	},

	fourSquare: function(m) {
		//bottom right
		svg.append("svg:rect")
			.attr("x",m[0]).attr("y",m[1]).attr("width",0).attr("height",0)
			.style("stroke",z(++i)).style("stroke-opacity",1)
			.transition().duration(500).ease(Math.sqrt)
			.attr("x",m[0]+40).attr("y",m[1]+40).attr("width",100).attr("height",100)
			.style("stroke-opacity",1e-6).remove();
		//bottom left
		svg.append("svg:rect")
			.attr("transform","rotate(90, " + m[0] + "," + m[1] +")")
			.attr("x",m[0]).attr("y",m[1]).attr("width",0).attr("height",0)
			.style("stroke",z(++i)).style("stroke-opacity",1)
			.transition().duration(500).ease(Math.sqrt)
			.attr("x",m[0]+40).attr("y",m[1]+40).attr("width",100).attr("height",100)
			.style("stroke-opacity",1e-6).remove();
		//top left
		svg.append("svg:rect")
			.attr("transform","rotate(180, " + m[0] + "," + m[1] +")")
			.attr("x",m[0]).attr("y",m[1]).attr("width",0).attr("height",0)
			.style("stroke",z(++i)).style("stroke-opacity",1)
			.transition().duration(500).ease(Math.sqrt)
			.attr("x",m[0]+40).attr("y",m[1]+40).attr("width",100).attr("height",100)
			.style("stroke-opacity",1e-6).remove();
		//top right
		svg.append("svg:rect")
			.attr("transform","rotate(270, " + m[0] + "," + m[1] +")")
			.attr("x",m[0]).attr("y",m[1]).attr("width",0).attr("height",0)
			.style("stroke",z(++i)).style("stroke-opacity",1)
			.transition().duration(500).ease(Math.sqrt)
			.attr("x",m[0]+40).attr("y",m[1]+40).attr("width",100).attr("height",100)
			.style("stroke-opacity",1e-6).remove();
	},


	linesToMouse: function(m) {
		//right
		svg.append("svg:line")
			.attr("x1",m[0]+w+30)
			.attr("y1",m[1])
			.attr("x2",m[0]+w+300)
			.attr("y2",m[1])
			.style("stroke",z(++i))
			.style("stroke-width", "10px")
			.style("stroke-opacity",1)
			.transition()
				.duration(500)
				.ease(Math.sqrt)
				.attr("x1",m[0])
				.attr("y1",m[1])
				.attr("x2",m[0])
				.attr("y2",m[1])
				//.style("stroke-opacity",.1)
				.remove();
		//bottom right
		svg.append("svg:line")
			.attr("x1",m[0]+w+30)
			.attr("y1",m[1]+h+30)
			.attr("x2",m[0]+w+300)
			.attr("y2",m[1]+h+300)
			.style("stroke",z(++i))
			.style("stroke-width", "10px")
			.style("stroke-opacity",1)
			.transition()
				.duration(500)
				.ease(Math.sqrt)
				.attr("x1",m[0])
				.attr("y1",m[1])
				.attr("x2",m[0])
				.attr("y2",m[1])
				//.style("stroke-opacity",.1)
				.remove();
		//bottom
		svg.append("svg:line")
			.attr("x1",m[0])
			.attr("y1",m[1]+h)
			.attr("x2",m[0])
			.attr("y2",m[1]+h+300)
			.style("stroke",z(++i))
			.style("stroke-width", "10px")
			.style("stroke-opacity",1)
			.transition()
				.duration(500)
				.ease(Math.sqrt)
				.attr("x1",m[0])
				.attr("y1",m[1])
				.attr("x2",m[0])
				.attr("y2",m[1])
				//.style("stroke-opacity",.1)
				.remove();

		//bottom left
		svg.append("svg:line")
			.attr("x1",m[0]-w-30)
			.attr("y1",m[1]+h-30)
			.attr("x2",m[0]-w-300)
			.attr("y2",m[1]+h+300)
			.style("stroke",z(++i))
			.style("stroke-width", "10px")
			.style("stroke-opacity",1)
			.transition()
				.duration(500)
				.ease(Math.sqrt)
				.attr("x1",m[0])
				.attr("y1",m[1])
				.attr("x2",m[0])
				.attr("y2",m[1])
				//.style("stroke-opacity",.1)
				.remove();
		//left
		svg.append("svg:line")
			.attr("x1",m[0]-w-30)
			.attr("y1",m[1])
			.attr("x2",m[0]-w-300)
			.attr("y2",m[1])
			.style("stroke",z(++i))
			.style("stroke-width", "10px")
			.style("stroke-opacity",1)
			.transition()
				.duration(500)
				.ease(Math.sqrt)
				.attr("x1",m[0])
				.attr("y1",m[1])
				.attr("x2",m[0])
				.attr("y2",m[1])
				//.style("stroke-opacity",.1)
				.remove();
		//top left
		svg.append("svg:line")
			.attr("x1",m[0]-w-30)
			.attr("y1",m[1]-h-30)
			.attr("x2",m[0]-w-300)
			.attr("y2",m[1]-h-300)
			.style("stroke",z(++i))
			.style("stroke-width", "10px")
			.style("stroke-opacity",1)
			.transition()
				.duration(500)
				.ease(Math.sqrt)
				.attr("x1",m[0])
				.attr("y1",m[1])
				.attr("x2",m[0])
				.attr("y2",m[1])
				//.style("stroke-opacity",.1)
				.remove();
		//top
		svg.append("svg:line")
			.attr("x1",m[0])
			.attr("y1",m[1]-h)
			.attr("x2",m[0])
			.attr("y2",m[1]-h-300)
			.style("stroke",z(++i))
			.style("stroke-width", "10px")
			.style("stroke-opacity",1)
			.transition()
				.duration(500)
				.ease(Math.sqrt)
				.attr("x1",m[0])
				.attr("y1",m[1])
				.attr("x2",m[0])
				.attr("y2",m[1])
				//.style("stroke-opacity",.1)
				.remove();

		//top right
		svg.append("svg:line")
			.attr("x1",m[0]+w+30)
			.attr("y1",m[1]-h-30)
			.attr("x2",m[0]+w+300)
			.attr("y2",m[1]-h-300)
			.style("stroke",z(++i))
			.style("stroke-width", "10px")
			.style("stroke-opacity",1)
			.transition()
				.duration(500)
				.ease(Math.sqrt)
				.attr("x1",m[0])
				.attr("y1",m[1])
				.attr("x2",m[0])
				.attr("y2",m[1])
				//.style("stroke-opacity",1e-6)
				.remove();
	},

	circleReverse: function(m) {

		svg.append("svg:circle")
			.attr("cx",m[0])
			.attr("cy",m[1])
			.attr("r",w/2)
			.style("stroke",z(++i))
			.transition()
				.duration(500)
				.attr("r",0)
				.style("stroke-opacity",1e-6)
				.remove();
	},

	basicCircle: function(m) {

		svg.append("svg:circle")
			.attr("cx",m[0]).attr("cy",m[1]).attr("r",0).style("stroke",z(++i))
			.transition().duration(1000).ease(Math.sqrt).attr("r",w/2).style("stroke-opacity",1e-6).remove();
	},

	miniworks: function(m) {

	  svg.append("svg:circle")
		.attr("cx",m[0])
		.attr("cy",m[1])
		.attr("r",10)
		.style("stroke",z(++i))
		.style("fill",z(i))
		.style("stroke-opacity",0.5)
		.transition()
		  .attr("transform","translate(155,155)")
		  .duration(1000)
		  .ease(Math.sqrt)
		  .attr("r",25)
		  .style("stroke-opacity",1e-6)
		  .style("fill-opacity",1e-6)
		  .remove();

	  svg.append("svg:circle")
		.attr("cx",m[0])
		.attr("cy",m[1])
		.attr("r",10)
		.style("stroke",z(++i))
		.style("fill",z(i))
		.style("stroke-opacity",0.5)
		.transition()
		  .attr("transform","translate(-155,155)")
		  .duration(1000)
		  .ease(Math.sqrt)
		  .attr("r",25)
		  .style("stroke-opacity",1e-6)
		  .style("fill-opacity",1e-6)
		  .remove();

	  svg.append("svg:circle")
		.attr("cx",m[0])
		.attr("cy",m[1])
		.attr("r",10)
		.style("stroke",z(++i))
		.style("fill",z(i))
		.style("stroke-opacity",0.5)
		.transition()
		  .attr("transform","translate(155,-155)")
		  .duration(1000)
		  .ease(Math.sqrt)
		  .attr("r",25)
		  .style("stroke-opacity",1e-6)
		  .style("fill-opacity",1e-6)
		  .remove();

	  svg.append("svg:circle")
		.attr("cx",m[0])
		.attr("cy",m[1])
		.attr("r",10)
		.style("stroke",z(++i))
		.style("fill",z(i))
		.style("stroke-opacity",0.5)
		.transition()
		  .attr("transform","translate(-155,-155)")
		  .duration(1000)
		  .ease(Math.sqrt)
		  .attr("r",25)
		  .style("stroke-opacity",1e-6)
		  .style("fill-opacity",1e-6)
		  .remove();
	},

	fireworks: function(m) {

	  svg.append("svg:circle")
		.attr("cx",m[0])
		.attr("cy",m[1])
		.attr("r",10)
		.style("stroke",z(++i))
		.style("fill",z(i))
		.style("stroke-opacity",0.5)
		.transition()
		  .attr("transform","translate(0,-400)")
		  .duration(1000)
		  .ease(Math.sqrt)
		  .attr("r",25)
		  .style("stroke-opacity",1e-6)
		  .style("fill-opacity",1e-6)
		  .remove();

	  svg.append("svg:circle")
		.attr("cx",m[0])
		.attr("cy",m[1])
		.attr("r",10)
		.style("stroke",z(++i))
		.style("fill",z(i))
		.style("stroke-opacity",0.5)
		.transition()
		  .attr("transform","translate(0,400)")
		  .duration(1000)
		  .ease(Math.sqrt)
		  .attr("r",25)
		  .style("stroke-opacity",1e-6)
		  .style("fill-opacity",1e-6)
		  .remove();

	  svg.append("svg:circle")
		.attr("cx",m[0])
		.attr("cy",m[1])
		.attr("r",10)
		.style("stroke",z(++i))
		.style("fill",z(i))
		.style("stroke-opacity",0.5)
		.transition()
		  .attr("transform","translate(400,0)")
		  .duration(1000)
		  .ease(Math.sqrt)
		  .attr("r",25)
		  .style("stroke-opacity",1e-6)
		  .style("fill-opacity",1e-6)
		  .remove();

	  svg.append("svg:circle")
		.attr("cx",m[0])
		.attr("cy",m[1])
		.attr("r",10)
		.style("stroke",z(++i))
		.style("fill",z(i))
		.style("stroke-opacity",0.5)
		.transition()
		  .attr("transform","translate(-400,0)")
		  .duration(1000)
		  .ease(Math.sqrt)
		  .attr("r",25)
		  .style("stroke-opacity",1e-6)
		  .style("fill-opacity",1e-6)
		  .remove();

	  svg.append("svg:circle")
		.attr("cx",m[0])
		.attr("cy",m[1])
		.attr("r",10)
		.style("stroke",z(++i))
		.style("fill",z(i))
		.style("stroke-opacity",0.5)
		.transition()
		  .attr("transform","translate(355,355)")
		  .duration(1000)
		  .ease(Math.sqrt)
		  .attr("r",25)
		  .style("stroke-opacity",1e-6)
		  .style("fill-opacity",1e-6)
		  .remove();

	  svg.append("svg:circle")
		.attr("cx",m[0])
		.attr("cy",m[1])
		.attr("r",10)
		.style("stroke",z(++i))
		.style("fill",z(i))
		.style("stroke-opacity",0.5)
		.transition()
		  .attr("transform","translate(-355,355)")
		  .duration(1000)
		  .ease(Math.sqrt)
		  .attr("r",25)
		  .style("stroke-opacity",1e-6)
		  .style("fill-opacity",1e-6)
		  .remove();

	  svg.append("svg:circle")
		.attr("cx",m[0])
		.attr("cy",m[1])
		.attr("r",10)
		.style("stroke",z(++i))
		.style("fill",z(i))
		.style("stroke-opacity",0.5)
		.transition()
		  .attr("transform","translate(355,-355)")
		  .duration(1000)
		  .ease(Math.sqrt)
		  .attr("r",25)
		  .style("stroke-opacity",1e-6)
		  .style("fill-opacity",1e-6)
		  .remove();

	  svg.append("svg:circle")
		.attr("cx",m[0])
		.attr("cy",m[1])
		.attr("r",10)
		.style("stroke",z(++i))
		.style("fill",z(i))
		.style("stroke-opacity",0.5)
		.transition()
		  .attr("transform","translate(-355,-355)")
		  .duration(1000)
		  .ease(Math.sqrt)
		  .attr("r",25)
		  .style("stroke-opacity",1e-6)
		  .style("fill-opacity",1e-6)
		  .remove();
	},
}