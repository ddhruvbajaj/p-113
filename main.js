function preload(){

}
    

function setup(){
    canvas=createCanvas(500,460);
    canvas.center();
    video=createCapture(VIDEO);
}


function draw(){
    ellipse(450, 46, 55, 55);

    ellipse(56, 400, 55, 55);

    ellipse(450, 400, 55, 55);

    ellipse(56, 46, 55, 55);

    rect(56, 20, 400, 30);


rect(56, 400, 400, 30);

rect(56, 20, 30, 400);

rect(450, 20, 30, 400);

}

function snap_shot(){
    save('filtercolor.png');
}
