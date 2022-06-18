img="";
status = "";
function preload(){
img=loadImage("66.jpg");
}
function setup(){
canvas=createCanvas(400,400);


}
function draw(){
    image(img,0,0,400,400);
    Fill("red");
    text(baby,45,75);
    noFill();
}


