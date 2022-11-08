const newDiv = document.createElement('div');
const body = document.querySelector('body');
var andObjects = [];
var cursorx = 0;
var cursory = 0;
var holding = [];

var canvas = document.querySelector('canvas');
canvas.setAttribute("height", document.body.clientHeight);
canvas.setAttribute("width", document.body.clientWidth);
var ctx = canvas.getContext("2d");


function getCursorPos(event) {
    cursorx = event.clientX;
    cursory = event.clientY;
}

function createAnd() {
	andObjects[andObjects.length ] = newDiv;
	andObjects[andObjects.length - 1].style.position = 'absolute';
	andObjects[andObjects.length - 1].setAttribute('class', 'and');
	andObjects[andObjects.length - 1].setAttribute("onmousedown", "startMoveObject('and', andObjects.length - 1)");
	andObjects[andObjects.length - 1].setAttribute("onmouseup", "dropObject('and', andObjects.length - 1)");
	document.body.insertAdjacentElement('afterbegin', andObjects[andObjects.length - 1]);
}

function startMoveObject(type, id) {
	/*
	alert(type);
	alert(id);
	*/
	holding[0] = type;
	holding[1] = id;
	holding[2] = andObjects[id].getBoundingClientRect().left;
	holding[3] = andObjects[id].getBoundingClientRect().top;
	moveObject(type, id);
}

function moveObject(type, id) {
	
}

function dropObject(type, id) {
	if (holding[0] == type && holding[1] == id) {
		//alert(holding[0] + ' ' + holding[1]);
	}
	holding[0] = '';
	holding[1] = '';
	holding[2] = '';
	holding[3] = '';
}