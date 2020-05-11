function callbackChargement(){
    
    let machine = document.getElementById("machine");
    let canvas = machine.getContext("2d");

    let triangle = new Image();  
    let triangleEnvers = new Image();

    triangle.addEventListener('load', function() {

        canvas.drawImage(triangle, 260, 55);
        canvas.drawImage(triangle, 310, 55);

    }, false);

    triangleEnvers.addEventListener('load', function() {

        canvas.drawImage(triangleEnvers, 260, 165);
        canvas.drawImage(triangleEnvers, 310, 165);

    }, false);

    triangle.src = "./médias/triangle.png";
    triangleEnvers.src = "./médias/triangleEnvers.png";


    canvas.font="50px arial";
    canvas.fillText("0",265,150);

    canvas.font="50px arial";
    canvas.fillText("0",315,150);

}

window.addEventListener("load", callbackChargement);