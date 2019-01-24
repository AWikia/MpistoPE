/* Make SmartTVs recognize cursors */
if (navigator.userAgent.match("SmartTV")) {
document.getElementById("Handler").className += " smart"
}

if (navigator.userAgent.match("Macintosh")) {
document.getElementById("Handler").className += " osx"
}

if (navigator.userAgent.match("Linux")) {
document.getElementById("Handler").className += " xubuntu"
}

if (navigator.userAgent.match("Trident")) {
document.getElementById("Handler").className += " explorer"
}

if (navigator.userAgent.match("Edge")) {
document.getElementById("Handler").className += " edge"
}

/* Mobile Only CSS */
if (navigator.userAgent.match("Mobile")) {
document.getElementById("Handler").className += " phone"
}

// JS begins here
function wikis1() {
	document.getElementById("wikiinput").removeAttribute('disabled');
}

function wikis2() {
	document.getElementById("wikiinput").setAttribute('disabled', 'true');
}

function page2() {
	document.getElementById("page1").setAttribute('disabled', 'true');
	document.getElementById("page2").removeAttribute('hidden');
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function check1() {
	document.getElementById("page2").setAttribute('disabled', 'true');
	document.getElementById("check").removeAttribute('hidden');
	setTimeout(checkcancel, getRandomInt(66, 6666));
}


function checkcancel() {
	document.getElementById("check").setAttribute('hidden', '');
	document.getElementById("page2").removeAttribute('disabled');
}

function reset() {
	document.getElementById("page2").setAttribute('disabled', 'true');
	document.getElementById("page3").removeAttribute('hidden');
	setTimeout(mpisto1, getRandomInt(6000,10000));
}


function reset2() {
	document.getElementById("page2").setAttribute('disabled', 'true');
	document.getElementById("page4").removeAttribute('hidden');
	setTimeout(mpisto1, getRandomInt(6000,10000));
}


function mpisto1() {
	document.getElementById("page3").setAttribute('disabled', 'true');
	document.getElementById("page4").setAttribute('disabled', 'true');
	document.getElementById("page5").removeAttribute('hidden');
	setTimeout(mpisto, getRandomInt(5000,5001));
}

function mpisto() {
window.location.replace("https://awikia.github.io/Mpisto");window.location.href = "https://awikia.github.io/Mpisto";
}