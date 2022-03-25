var lastpositionX, lastpositionY;
color= "green";
width_line= 2.5;
canvas=document.getElementById("micanvas");
ctx = canvas.getContext("2d");
var ancho= screen.width;
nuevo_ancho= screen.width - 70;
nuevo_alto= screen.height - 300;

if(ancho < 992)
{
    document.getElementById("micanvas").width = nuevo_ancho;
    document.getElementById("micanvas").height = nuevo_alto;
    document.body.style.overflow ="hidden";
}

canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e)
{
console.log("mytouchstart");
color= document.getElementById("color").value ;
width_line = document.getElementById("width_line").value ;
lastpositionX= e.touches[0].clientX - canvas.offsetLeft;
lastpositionY= e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e)
{
    console.log("mytouchmove");
    current_positionX = e.touches[0].clientX-canvas.offsetLeft;
    current_positionY = e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_line;
    console.log("ultima posicion de x y coordenadas = ");
    console.log("x = " + lastpositionX + "y =" + lastpositionY);
    ctx.moveTo(lastpositionX, lastpositionY);
    console.log("actual posicion de x y coordenadas = ");
    console.log("x = " + current_positionX + "y =" + current_positionY);
    ctx.lineTo(current_positionX,current_positionY);
    ctx.stroke ();
    lastpositionX = current_positionX;
    lastpositionY = current_positionY;
}

function limpiar()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}