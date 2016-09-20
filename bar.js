var filler = "|";

var bars = document.getElementsByClassName('skill_amount');
for(var i = 0; i  < bars.length; i++){
    var l = bars[i].innerHTML.substring(0, bars[i].innerHTML.indexOf("<"));
    var rest = bars[i].innerHTML.substring(bars[i].innerHTML.indexOf("<"));
    rest = rest.replace("#", filler);
    var level = parseInt(l, 10);
    bars[i].innerHTML = "";
    for(var j = 0; j < level; j+=5){
        bars[i].innerHTML += filler;
    }
    bars[i].innerHTML += rest;
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
    $(".end_hash").css("background-color", "black");
    $(".end_hash").css("color", "white");
}
function blinkIn(){
    $(".end_hash").css("background-color", "white");
    $(".end_hash").css("color", "black");
    setTimeout(blinkOut, 700);
}
setInterval(blinkIn, 1400);
