var svg = d3.select("body").append("svg:svg").style("pointer-events", "all");
var colors = d3.scale.category20b();
var ci=0;
var debug = false;
function log(msg) {if (debug) {console.log(msg);}}

function Recorder(head, entries) {
	if (this == window) {throw('Can only be called to create new instance, i.e., with `new`.');}
	this.entries = [];
	this.callbacks = {};
	this.bind = function(eventName, func) {this.callbacks[eventName] = func;};
	this.setEntries = function(entries, head) {
		this.entries.splice(0,this.entries.length);
		if (entries) { for (var i = 0; i < entries.length; i++) {
			this.entries.push(entries[i]);
		} }
		if (head !== undefined) {this.segmentStartHead = head;}
		else {
			if (entries && entries.length > 0) {this.segmentStartHead = entries[entries.length-1][0];}
			else {this.segmentStartHead = 0;}
		}
	};
	this.reset = function() {
		this._stop();
		this.setEntries();
		var callback = this.callbacks['reset']; if (callback) {callback();}
		log('recording reset.');
	};
	this.start = function() {
		if (!this.segmentStartTime) {this.segmentStartTime = new Date();}
		log('recording...');
		var callback = this.callbacks['start']; if (callback) {callback();}
	};
	this.stop = function() {
		this._stop();
		log('recording stopped.');
		var callback = this.callbacks['stop']; if (callback) {callback();}
	};
	this._stop = function() {
		this.record(undefined);
		this.segmentStartHead = this.getHead();
		this.segmentStartTime = undefined;
	};
	this.getHead = function() {
		return this.segmentStartHead + (new Date() - this.segmentStartTime);
	};
	this.record = function(entry) {
		if (!this.segmentStartTime) {return;}
		this.entries.push([this.getHead(), entry]);
		var callback = this.callbacks['record']; if (callback) {callback();}
	};
	this.entriesToJSON = function() {
		return JSON.stringify(this.entries);
	};
	this.entriesFromJSON = function(entriesJSON) {
		return this.setEntries(JSON.parse(entriesJSON));
	};
}

function Player(entryHandler, entries) {
	var self = this;
	if (this == window) {throw('Can only be called to create new instance, i.e., with `new`.');}
	this.entries = entries || [];
	this.entryHandler = entryHandler;
	this.callbacks = {};
	this.bind = function(eventName, func) {this.callbacks[eventName] = func;};
	this.reset = function() {
		this.stop();
		this.segmentStartHead = 0;
		this.index = -1;
		log('playing reset.');
		var callback = this.callbacks['reset']; if (callback) {callback();}
	};
	this.start = function() {
		if (this.timeout) {clearTimeout(this.timeout);}
		if (!this.segmentStartTime) {this.segmentStartTime = new Date();}
		log('playing...');
		var callback = this.callbacks['start']; if (callback) {callback();}
		this.play();
	};
	this.play = function() {
		// log(this.index);
		if (this.index >= 0) {
			var entry = this.entries[this.index][1];
			if (entry !== undefined && entry !== null) {this.entryHandler(entry);}
		}
		this.index++;
		if (this.index >= this.entries.length) {this.stop(); this.reset();}
		else {
			timeUntilHeadOfNextEntry = this.getTimeUntilHeadOfEntry(this.index);
			// log(timeUntilHeadOfNextEntry);
			this.timeout = setTimeout( function(){self.play();}, timeUntilHeadOfNextEntry );
		}
		var callback = this.callbacks['play']; if (callback) {callback();}
	};
	this.stop = function() {
		clearTimeout(this.timeout);
		this.segmentStartHead = this.getHead();
		this.segmentStartTime = undefined;
		log('playing stopped.');
		var callback = this.callbacks['stop']; if (callback) {callback();}
	};
	this.getHead = function() {
		return this.segmentStartHead + (new Date() - this.segmentStartTime);
	};
	this.getTimeUntilHeadOfEntry = function(index) {
		return this.entries[index][0] - this.getHead();
	};
}

var recorderButtonSelectors = ['#button-record-start', '#button-record-stop', '#button-record-reset'];
var playerButtonSelectors = ['#button-play-start', '#button-play-stop', '#button-play-reset'];
function setButtonState(buttonSelectors, enableState) {
	return function() {
		for (var i = 0; i < buttonSelectors.length; i++) {
			if (enableState[i]===true) {$(buttonSelectors[i]).removeAttr('disabled');}
			else if (enableState[i]===false) {$(buttonSelectors[i]).attr('disabled', '');}
		}
	};
}


$('#button-record-start').click(function() {recorder.start();});
$('#button-record-stop').click(function() {recorder.stop();});
$('#button-record-reset').click(function() {recorder.reset();});
$('#button-play-start').click(function() {player.start();});
$('#button-play-stop').click(function() {player.stop();});
$('#button-play-reset').click(function() {player.reset();});


stringConverter = {};

function toggleExporter() {
	$('#exported, .button-export, .button-record').toggle();
}

/*function exportToHash() {
	stringConverter.JSON = recorder.entriesToJSON();
	stringConverter.LZW = LZW.encode(stringConverter.JSON);
	stringConverter.Base64 = Base64.encode(stringConverter.LZW);
	location.hash = '#' + stringConverter.Base64;
}
function importFromHash () {
	if (!location.hash.substring(1)) {return;}
	stringConverter.Base64 = location.hash.substring(1);
	stringConverter.LZW = Base64.decode(stringConverter.Base64);
	stringConverter.JSON = LZW.decode(stringConverter.LZW);
	recorder.entriesFromJSON(stringConverter.JSON);
}*/

function exportToTextarea() {
	var data = recorder.entriesToJSON();
	$('#exported').val(data);
}
function importFromTextarea () {
	var data = $('#exported').val();
	recorder.entriesFromJSON(data);
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


recorder = new Recorder();
recorder.bind('start', setButtonState(recorderButtonSelectors, [false, true, true]));
recorder.bind('stop', function() {
	// exportToHash();
	setButtonState(recorderButtonSelectors, [true, false, true])();
});
recorder.bind('reset', setButtonState(recorderButtonSelectors, [true, false, false]));
recorder.reset();
player = new Player(recordHandler, recorder.entries);
player.bind('start', setButtonState(playerButtonSelectors, [false, true, true]));
player.bind('stop', setButtonState(playerButtonSelectors, [true, false, true]));
player.bind('reset', setButtonState(playerButtonSelectors, [true, false, false]));
player.reset();


function doVisual(visualName, fmx, fmy) {
	var w = window.innerWidth, h = window.innerHeight;
	var visual = visuals[visualName];
	return visual(w*fmx, h*fmy, w, h);
}

function setEventHandler(visualName, eventName) {
	// log(visualName, eventName);
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
    // importFromHash();
});
