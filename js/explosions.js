//the main concert function.
var w=window.innerWidth,
    h=window.innerHeight,
    z = d3.scale.category20b(),
    onOff = 0,
    i=0,
    j=1,

    refreshInterval=[];


var svg = d3.select("body").append("svg:svg")
    .attr("width",w)
    .attr("height",h)
    .style("pointer-events", "all")
    .on("mousemove", circleReverse)
    .on("mousedown",circleReverse);

//////////////////////////////////mousedown functions////////////
function onClickYoloswag() {
	svg.on("mousedown", yoloSwag)
}
function onClickTriangles() {
	svg.on("mousedown", triangles)
}

function onClickHexagon() {
	svg.on("mousedown", hexagon)
}
function onClickBiglines() {
	svg.on("mousedown", biglines)
}
function onClickConfetti() {
	svg.on("mousedown",confetti)
}

function onClickJazz() {
	svg.on("mousedown",jazz)
}

function onClickDrawing() {
	svg.on("mousedown",drawing)
}

function onClickFourSquare() {
	svg.on("mousedown",fourSquare)
}

function onClickLinesToMouse() {
	svg.on("mousedown",linesToMouse)
}

function onClickCircleReverse() {
	svg.on("mousedown",circleReverse)
}

function onClickBasicCircle() {
	svg.on("mousedown",basicCircle)
}

function onClickMiniworks() {
	svg.on("mousedown",miniworks)
}

function onClickFireworks() {
	svg.on("mousedown",fireworks)
}

function onClickImplosion() {
	svg.on("mousedown",implosion)
}

function onClickConfetti() {
	svg.on("mousedown",confetti)
}
////////////////////////////////clickityclicks together//////////
function allTheIfs2(){

if (document.getElementById("clicky").selectedIndex==0)
{
	onClickCircleReverse();
}
else if (document.getElementById("clicky").selectedIndex==1)
{
	onClickBasicCircle();
}
else if (document.getElementById("clicky").selectedIndex==2)
{
	onClickHexagon();
}
else if (document.getElementById("clicky").selectedIndex==3)
{
	onClickFireworks();
}
else if (document.getElementById("clicky").selectedIndex==4)
{
	onClickMiniworks();
}
else if (document.getElementById("clicky").selectedIndex==5)
{
	onClickYoloswag();
}
else if (document.getElementById("clicky").selectedIndex==6)
{
	onClickLinesToMouse();
}
else if (document.getElementById("clicky").selectedIndex==7)
{
	onClickFourSquare();
}
else if (document.getElementById("clicky").selectedIndex==8)
{
	onClickConfetti();
}
else if (document.getElementById("clicky").selectedIndex==9)
{
	onClickJazz();
}
else if (document.getElementById("clicky").selectedIndex==10)
{
	onClickDrawing();
}
else if (document.getElementById("clicky").selectedIndex==11)
{
	onClickBiglines();
}
else if (document.getElementById("clicky").selectedIndex==12)
{
	onClickTriangles();
}
else if (document.getElementById("clicky").selectedIndex==13)
{
	onClickImplosion();
}
}
////////////////////////////////////onMouse motion functions/////
function onMouseYoloswag() {
	svg.on("mousemove", yoloSwag)
}
function onMouseTriangles() {
	svg.on("mousemove", triangles)
}

function onMouseHexagon() {
	svg.on("mousemove", hexagon)
}
function onMouseBiglines() {
	svg.on("mousemove", biglines)
}
function onMouseConfetti() {
	svg.on("mousemove",confetti)
}

function onMouseJazz() {
	svg.on("mousemove",jazz)
}

function onMouseDrawing() {
	svg.on("mousemove",drawing)
}

function onMouseFourSquare() {
	svg.on("mousemove",fourSquare)
}

function onMouseLinesToMouse() {
	svg.on("mousemove",linesToMouse)
}

function onMouseCircleReverse() {
	svg.on("mousemove",circleReverse)
}

function onMouseBasicCircle() {
	svg.on("mousemove",basicCircle)
}

function onMouseMiniworks() {
	svg.on("mousemove",miniworks)
}

function onMouseFireworks() {
	svg.on("mousemove",fireworks)
}

function onMouseConfetti() {
	svg.on("mousemove",confetti)
}
//////////////////////////////binding the everything together////
function allTheIfs(){

if (document.getElementById("moves").selectedIndex==0)
{
	onMouseCircleReverse();
}
else if (document.getElementById("moves").selectedIndex==1)
{
	onMouseBasicCircle();
}
else if (document.getElementById("moves").selectedIndex==2)
{
	onMouseHexagon();
}
else if (document.getElementById("moves").selectedIndex==3)
{
	onMouseFireworks();
}
else if (document.getElementById("moves").selectedIndex==4)
{
	onMouseMiniworks();
}
else if (document.getElementById("moves").selectedIndex==5)
{
	onMouseYoloswag();
}
else if (document.getElementById("moves").selectedIndex==6)
{
	onMouseLinesToMouse();
}
else if (document.getElementById("moves").selectedIndex==7)
{
	onMouseFourSquare();
}
else if (document.getElementById("moves").selectedIndex==8)
{
	onMouseConfetti();
}
else if (document.getElementById("moves").selectedIndex==9)
{
	onMouseJazz();
}
else if (document.getElementById("moves").selectedIndex==10)
{
	onMouseDrawing();
}
else if (document.getElementById("moves").selectedIndex==11)
{
	onMouseBiglines();
}
else if (document.getElementById("moves").selectedIndex==12)
{
	onMouseTriangles();
};
}
////////////////////////////////////onMouse motion functions/////
function onMouseYoloswag() {
	svg.on("mousemove", yoloSwag)
}
function onMouseTriangles() {
	svg.on("mousemove", triangles)
}

function onMouseHexagon() {
	svg.on("mousemove", hexagon)
}
function onMouseBiglines() {
	svg.on("mousemove", biglines)
}
function onMouseConfetti() {
	svg.on("mousemove",confetti)
}

function onMouseJazz() {
	svg.on("mousemove",jazz)
}

function onMouseDrawing() {
	svg.on("mousemove",drawing)
}

function onMouseFourSquare() {
	svg.on("mousemove",fourSquare)
}

function onMouseLinesToMouse() {
	svg.on("mousemove",linesToMouse)
}

function onMouseCircleReverse() {
	svg.on("mousemove",circleReverse)
}

function onMouseBasicCircle() {
	svg.on("mousemove",basicCircle)
}

function onMouseMiniworks() {
	svg.on("mousemove",miniworks)
}

function onMouseFireworks() {
	svg.on("mousemove",fireworks)
}

function onMouseImplosion() {
	svg.on("mousemove",implosion)
}

function onMouseConfetti() {
	svg.on("mousemove",confetti)
}
///////////////////////////////////////////actual visualizations///////////
function yoloSwag() {
	var m = d3.mouse(this);

	svg.append("svg:text")
	.attr("font-size","16")
	.attr("font-family","Lato")
	.attr("fill","#ffffff")
	.attr("x",m[0])
	.attr("y",m[1])
	.attr("fill-opacity",1)
	.text("#yoloswag")
	.transition()
	.duration(500)
	.ease(Math.sqrt)
	.attr("font-size","28")
	.attr("x", m[0]-50)
	.attr("y",m[1]-50)
	.attr("fill-opacity",.1)
	.remove()
}

function hexagon() {
	var m = d3.mouse(this);
	var swag=[0,0,0,0,0,0]
	var k;
	var initRotate=0;
	for (k=0; k < swag.length; k++)
	{
		var curmx = m[0],
			curmy = m[1];


		svg.append("svg:circle")
		.attr("transform","rotate(" + initRotate + ", " + curmx + "," + curmy +")")
		.attr("cx",curmx)
		.attr("cy",curmy)
		.attr("r", 10)
		.style("stroke",z(++i))
		.style("fill", z(++i))
		.transition()
			.duration(500)
			.ease(Math.sqrt)
			.attr("cx",curmx + 200)
			.attr("cy", curmy + 200)
		.transition()
			.duration(500)
			.ease(Math.sqrt)
			.attr("cx",curmx - 200)
		.transition()
			.duration(500)
			.ease(Math.sqrt)
			.attr("cx",curmx - 200)
			.attr("cy",curmy - 200)
		.transition()
			.duration(500)
			.ease(Math.sqrt)
			.attr("cy",curmy - 200)
			.attr("cx",curmx + 200)
		.transition()
			.duration(500)
			.ease(Math.sqrt)
			.attr("cx",curmx + 200)
			.attr("cy", curmy + 200)

		.transition()
			.duration(500)
			.ease(Math.sqrt)
			.attr("cx",curmy+200)
			.attr("cy",curmy - 200)
			.style("stroke-opacity",1e-6)
			.style("fill-opacity", 1e-6)
			.remove()


		initRotate+=60;
	}
}

function triangles() {
	var m = d3.mouse(this);
	var swag = [0,0,0];
	var k;

	var curmx = m[0],
		curmy = m[1];

	var p1init = (curmx-20) + " " + (curmy)
	var p2init = curmx + " " + (curmy-40)
	var p3init = (curmx+20) + " " + (curmy)

	var p1 = (curmx-50) + " " + (curmy-100)
	var p2 = curmx + " " + (curmy-250)
	var p3 = (curmx+50) + " " + (curmy-100)

	for (k = 0; k < swag.length; k++)
	{
		svg.append("svg:path")
		.attr("d", "M " + p1init + " L "+p2init + " L "+p3init + " L " + p1init)
		.style("stroke", z(++i))
		.style("stroke-opacity",1)
		.style("stroke-width","5px")
		.style("fill-opacity",0)
		.transition()
		.duration(500)
		.ease(Math.sqrt)
		.attr("d", "M " + p1 + " L "+p2 + " L "+p3 + " L " + p1)
		.style("stroke-opacity",1e-6)
		.remove();

		svg.append("svg:path")
		.attr("transform","rotate(125, " + curmx + "," + curmy +")")
		.attr("d", "M " + p1init + " L "+p2init + " L "+p3init + " L " + p1init)
		.style("stroke", z(++i))
		.style("stroke-opacity",1)
		.style("stroke-width","5px")
		.style("fill-opacity",0)
		.transition()
		.duration(500)
		.ease(Math.sqrt)
		.attr("d", "M " + p1 + " L "+p2 + " L "+p3 + " L " + p1)
		.style("stroke-opacity",1e-6)
		.remove();

		svg.append("svg:path")
		.attr("transform","rotate(235, " + curmx + "," + curmy +")")
		.attr("d", "M " + p1init + " L "+p2init + " L "+p3init + " L " + p1init)
		.style("stroke", z(++i))
		.style("stroke-opacity",1)
		.style("stroke-width","5px")
		.style("fill-opacity",0)
		.transition()
		.duration(500)
		.ease(Math.sqrt)
		.attr("d", "M " + p1 + " L "+p2 + " L "+p3 + " L " + p1)
		.style("stroke-opacity",1e-6)
		.remove();
	}
}
function biglines() {
	var m = d3.mouse(this);
	var swag = [0,0,0,0,0]
	var k;
	for (k=0; k < swag.length; k++)
	{
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

}
function confetti() {
	var m = d3.mouse(this);
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
}

function jazz() {
	var m = d3.mouse(this);
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
}

function drawing() {
	var m = d3.mouse(this);
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
}

function fourSquare() {
	var m = d3.mouse(this);
	//bottom right
	svg.append("svg:rect")
		.attr("x",m[0])
		.attr("y",m[1])
		.attr("width",0)
		.attr("height",0)
		.style("stroke",z(++i))
		.style("stroke-opacity",1)
		.transition()
		.duration(500)

		.ease(Math.sqrt)
		.attr("x",m[0]+40)
		.attr("y",m[1]+40)
		.attr("width",100)
		.attr("height",100)
		.style("stroke-opacity",1e-6)
		.remove();
	//bottom left
	svg.append("svg:rect")
		.attr("transform","rotate(90, " + m[0] + "," + m[1] +")")
		.attr("x",m[0])
		.attr("y",m[1])
		.attr("width",0)
		.attr("height",0)
		.style("stroke",z(++i))
		.style("stroke-opacity",1)
		.transition()
		.duration(500)
		.ease(Math.sqrt)
		.attr("x",m[0]+40)
		.attr("y",m[1]+40)
		.attr("width",100)
		.attr("height",100)
		.style("stroke-opacity",1e-6)
		.remove();
	//top left
	svg.append("svg:rect")
		.attr("transform","rotate(180, " + m[0] + "," + m[1] +")")
		.attr("x",m[0])
		.attr("y",m[1])
		.attr("width",0)
		.attr("height",0)
		.style("stroke",z(++i))
		.style("stroke-opacity",1)
		.transition()
		.duration(500)
		.ease(Math.sqrt)
		.attr("x",m[0]+40)
		.attr("y",m[1]+40)
		.attr("width",100)
		.attr("height",100)
		.style("stroke-opacity",1e-6)
		.remove();
	//top right
	svg.append("svg:rect")
		.attr("transform","rotate(270, " + m[0] + "," + m[1] +")")
		.attr("x",m[0])
		.attr("y",m[1])
		.attr("width",0)
		.attr("height",0)
		.style("stroke",z(++i))
		.style("stroke-opacity",1)
		.transition()
		.duration(500)
		.ease(Math.sqrt)
		.attr("x",m[0]+40)
		.attr("y",m[1]+40)
		.attr("width",100)
		.attr("height",100)
		.style("stroke-opacity",1e-6)
		.remove();
}


function linesToMouse() {
	var m = d3.mouse(this);
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
}

function circleReverse() {
	var m = d3.mouse(this);

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
}

function basicCircle() {
	var m = d3.mouse(this);

	svg.append("svg:circle")
		.attr("cx",m[0])
    	.attr("cy",m[1])
    	.attr("r",0)
    	.style("stroke",z(++i))
    	.transition()
    		.duration(1000)
    		.ease(Math.sqrt)
    		.attr("r",w/2)
    		.style("stroke-opacity",1e-6)
    		.remove();
}

function miniworks() {
  var m = d3.mouse(this);

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
}
function fireworks() {

  var m = d3.mouse(this);

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
}

function implosion() {

  var m = d3.mouse(this);
  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",w/2)
    .style("stroke",z(++i))
    .style("stroke-opacity",1)
    .transition()
    .duration(750)
    .attr("r",0)
    .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(500)
      .attr("transform","translate(0,-300)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(500)
      .attr("transform","translate(0,300)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(500)
      .attr("transform","translate(300,0)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(500)
      .attr("transform","translate(-300,0)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(500)
      .attr("transform","translate(250,250)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(500)
      .attr("transform","translate(-250,250)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(500)
      .attr("transform","translate(250,-250)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(500)
      .attr("transform","translate(-250,-250)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

    svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(750)
      .attr("transform","translate(0,-300)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(750)
      .attr("transform","translate(0,300)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(750)
      .attr("transform","translate(300,0)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(750)
      .attr("transform","translate(-300,0)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(750)
      .attr("transform","translate(250,250)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(750)
      .attr("transform","translate(-250,250)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(750)
      .attr("transform","translate(250,-250)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(750)
      .attr("transform","translate(-250,-250)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(1000)
      .attr("transform","translate(0,-300)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(1000)
      .attr("transform","translate(0,300)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(1000)
      .attr("transform","translate(300,0)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(1000)
      .attr("transform","translate(-300,0)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(1000)
      .attr("transform","translate(250,250)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(1000)
      .attr("transform","translate(-250,250)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(1000)
      .attr("transform","translate(250,-250)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();

  svg.append("svg:circle")
    .attr("cx",m[0])
    .attr("cy",m[1])
    .attr("r",0)
    .style("stroke",z(++i))
    .style("fill",z(i))
    .style("stroke-opacity",0.5)
    .transition()
      .delay(1000)
      .attr("transform","translate(-250,-250)")
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r",25)
      .style("stroke-opacity",1e-6)
      .style("fill-opacity",1e-6)
      .remove();


  }



function twins() {
  var m = d3.mouse(this);

  svg.append("svg:rect")
      .attr("transform","rotate(30," + m[0] + "," + m[1] +")")
      .attr("x", m[0])
      .attr("y", m[1])
      .attr("width", 1)
      .attr("height", 1)
      .style("stroke-width",5)
      .style("stroke", z(++i))
      .style("stroke-opacity", 1)
    .transition()
      .duration(500)
      .ease(Math.sqrt)
      .attr("transform","translate(75,0)")
      .attr("width", 75)
      .attr("height",75)
      .style("stroke-width",5)
      .style("stroke-opacity", 1e-6)
      .remove();

  svg.append("svg:rect")
      .attr("transform","rotate(30," + m[0] + "," + m[1] +")")
      .attr("x", m[0])
      .attr("y", m[1])
      .attr("width", 1)
      .attr("height", 1)
      .style("stroke-width",5)
      .style("stroke", z(++i))
      .style("stroke-opacity", 1)
    .transition()
      .duration(500)
      .ease(Math.sqrt)
      .attr("transform","translate(-75,0)")
      .attr("width", 75)
      .attr("height",75)
      .style("stroke-width",5)
      .style("stroke-opacity", 1e-6)
      .remove();
}
