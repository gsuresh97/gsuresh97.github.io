function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

var filler = "|";
var fillerWidth = 8;


$(window).resize(function() {
	fixBars();
    console.log($(".skill_amount").width());
});

var percents = [];
fixBars();
function fixBars(){
	var bars = document.getElementsByClassName('skill_amount');
	var width = $(bars).width();
	// console.log("width:" + width);
	// console.log("filler width:" + fillerWidth);
	// console.log("width/ fillerWidth:" + width/fillerWidth);
	for(var i = 0; i  < 12; i++){
		console.log(bars[i]);
	    var l = bars[i].innerHTML.substring(0, bars[i].innerHTML.indexOf("<"));
	    var rest = bars[i].innerHTML.substring(bars[i].innerHTML.indexOf("<"));
	    rest = rest.replace("#", filler);
	    var level = parseInt(l, 10);
	    percents.push(level);

	    var percent = percents[i]*$(".skill_amount").width()/100;

	    bars[i].innerHTML = "";
	    for(var j = 0; j < percent; j+=fillerWidth){
	        bars[i].innerHTML += filler;
	    }
	    bars[i].innerHTML += rest;
}

console.log(percents);
}

var desc = $(".sd")
for(var i = 0; i < desc.length; i++){
    $(desc[i]).fadeOut(1);
}

function show0() {
    $(desc[0]).fadeIn(1000);
    setTimeout(show1, 1500);
}
function show1() {
    $(desc[1]).fadeIn(1000);
    setTimeout(show2, 1500);
}
function show2() {
    $(desc[2]).fadeIn(1000);
    setTimeout(show3, 1500);
}
function show3() {
    $(desc[3]).fadeIn(1000);
}

setTimeout(show0, 1000);

function blinkOut(){
    $(".end_hash").css("display", "none");
}
function blinkIn(){
    $(".end_hash").css("display", "inline");
    setTimeout(blinkOut, 700);
}

function cursorOut() {
    $(".end_hash").css("background-color", "black");
    $(".end_hash").css("color", "white");
}

function cursorIn() {
    $(".end_hash").css("background-color", "white");
    $(".end_hash").css("color", "black");
    setTimeout(cursorOut, 700);
}
setInterval(blinkIn, 1400);
