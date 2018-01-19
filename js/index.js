
var myVar = setInterval(function () {myTimer()}, 1000);
function myTimer() {
    var d = new Date();
    document.getElementById("sprint_time").innerHTML = d.toLocaleTimeString();
}
