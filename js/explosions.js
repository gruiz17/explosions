//the main concert function.
var z = d3.scale.category20b(),
	onOff = 0,
	i=0,
	j=1,
	refreshInterval=[];

var w=window.innerWidth,
	h=window.innerHeight;

// var svg = d3.select("body").append("svg:svg").attr("width",w).attr("height",h).style("pointer-events", "all");
var svg = d3.select("body").append("svg:svg").style("pointer-events", "all");

function coordinateMapper(visual) {
	return function() {
		// console.log(visual);
		return visual(d3.mouse(this));
	};
}

function setEventHandler(visualName, eventName) {
	console.log(visualName, eventName);
	var visual = visuals[visualName];
	svg.on(eventName, coordinateMapper(visual));
}

function setEventHandlerFromMenuOption(element, eventName) {
	var visualName = element.value;
	setEventHandler(visualName, eventName);
}

$(document).ready(function() {
	setEventHandler('yoloswag', 'mousemove');
	setEventHandler('yoloswag', 'mousedown');
    $("#mousemoveSelector").change(function() {
        setEventHandlerFromMenuOption(this, 'mousemove');
    });
    $("#mousedownSelector").change(function() {
        setEventHandlerFromMenuOption(this, 'mousedown');
    });
});
