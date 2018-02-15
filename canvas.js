var canvas = document.getElementById("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext("2d")
c.fillRect(100,100,100,100);
c.fillRect(210,210,100,100);
c.fillRect(220,120,100,100);
c.fillRect(140,240,100,100);
//console.log(canvas);