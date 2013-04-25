var svg = d3.select("body").append("svg:svg")
	.style("pointer-events", "all");
var colors = d3.scale.category20b();
var ci=0;

function coordinateMapper(visual) {
	return function() {
		var m = d3.mouse(svg[0][0]);
		return visual(m[0], m[1], window.innerWidth, window.innerHeight);
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
	setEventHandler('linestomouse', 'mousemove');
	setEventHandler('circlereverse', 'mousedown');
    $("#mousemoveSelector").change(function() {
        setEventHandlerFromMenuOption(this, 'mousemove');
    });
    $("#mousedownSelector").change(function() {
        setEventHandlerFromMenuOption(this, 'mousedown');
    });
});
