var svg = d3.select("body").append("svg:svg").style("pointer-events", "all");
var colors = d3.scale.category20b();
var ci=0;

function Recorder(head, entries) {
	if (this == window) {throw('Can only be called to create new instance, i.e., with `new`.');}
	this.entries = [];
	this.reset = function() {
		this.entries.splice(0,this.entries.length);
		if (entries) { for (var i = 0; i < entries.length; i++) {
			this.entries.push(entries[i]);
		} }
		this.segmentStartHead = head || 0;
		console.log('recording reset.');
	};
	this.reset();
	this.start = function() {
		if (!this.segmentStartTime) {this.segmentStartTime = new Date();}
		console.log('recording...');
	};
	this.stop = function() {
		this.segmentStartHead = this.getHead();
		this.segmentStartTime = undefined;
		console.log('recording stopped.');
	};
	this.getHead = function() {
		return this.segmentStartHead + (new Date() - this.segmentStartTime);
	};
	this.record = function(entry) {
		if (!this.segmentStartTime) {return;}
		this.entries.push([this.getHead(), entry]);
	};
	this.entriesToJSON = function() {
		return JSON.stringify(this.entries);
	};
}

recorder = new Recorder();
player = new Player(recordHandler, recorder.entries);

function Player(entryHandler, entries) {
	var self = this;
	if (this == window) {throw('Can only be called to create new instance, i.e., with `new`.');}
	this.entries = entries || [];
	this.entryHandler = entryHandler;
	this.reset = function() {
		this.segmentStartHead = 0;
		this.index = -1;
		console.log('playing reset.');
	};
	this.reset();
	this.start = function() {
		if (!this.segmentStartTime) {this.segmentStartTime = new Date();}
		this.play();
		console.log('playing...');
	};
	this.play = function() {
		// console.log(this.index);
		if (this.index >= 0) {this.entryHandler(this.entries[this.index][1]);}
		this.index++;
		if (this.index >= this.entries.length) {this.stop(); this.reset();}
		else {
			timeUntilHeadOfNextEntry = this.getTimeUntilHeadOfEntry(this.index);
			// console.log(timeUntilHeadOfNextEntry);
			this.timeout = setTimeout(
				function(){self.play();},
				timeUntilHeadOfNextEntry
			);
		}
	};
	this.stop = function() {
		clearTimeout(this.timeout);
		this.segmentStartHead = this.getHead();
		this.segmentStartTime = undefined;
		console.log('playing stopped.');
	};
	this.getHead = function() {
		return this.segmentStartHead + (new Date() - this.segmentStartTime);
	};
	this.getTimeUntilHeadOfEntry = function(index) {
		return this.entries[index][0] - this.getHead();
	};
}

function mouseHandler(visualName) {
	return function() {
		var m = d3.mouse(svg[0][0]);
		var w = window.innerWidth, h = window.innerHeight;
		var fmx = m[0]/w, fmy = m[1]/h;
		if (window.recorder) {recorder.record([visualName, fmx, fmy]);}
		return doVisual(visualName, fmx, fmy);
	};
}

function recordHandler(entry) {
	return doVisual(entry[0], entry[1], entry[2]);
}

function doVisual(visualName, fmx, fmy) {
	var w = window.innerWidth, h = window.innerHeight;
	var visual = visuals[visualName];
	return visual(w*fmx, h*fmy, w, h);
}

function setEventHandler(visualName, eventName) {
	// console.log(visualName, eventName);
	svg.on(eventName, mouseHandler(visualName));
}

function setEventHandlerFromMenuOption(element, eventName) {
	var visualName = element.value;
	setEventHandler(visualName, eventName);
}

$(document).ready(function() {
	setEventHandler('miniworks', 'mousemove');
	setEventHandler('hexagon', 'mousedown');
    $("#mousemoveSelector").change(function() {
        setEventHandlerFromMenuOption(this, 'mousemove');
    });
    $("#mousedownSelector").change(function() {
        setEventHandlerFromMenuOption(this, 'mousedown');
    });
});
