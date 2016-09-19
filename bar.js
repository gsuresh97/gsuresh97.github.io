var bars = document.getElementsByClassName('skill_amount');
for(var i = 0; i  < bars.length; i++){
    var l = bars[i].innerHTML.substring(0, bars[i].innerHTML.indexOf("<"));
    var rest = bars[i].innerHTML.substring(bars[i].innerHTML.indexOf("<"));
    var level = parseInt(l, 10);
    bars[i].innerHTML = "";
    for(var j = 0; j < level; j+=5){
        bars[i].innerHTML += "#";
    }
    bars[i].innerHTML += rest;
}

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
