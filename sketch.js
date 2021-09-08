function setup(){
createCanvas(500,500);
var b1=createButton("red")
 b1.mousePressed(redColor);
 b1.position(50,100);
 var b2 =createButton("green");
 b2. mousePressed(greenColor);
 b2.position(200,100);
}


function draw()
{

}
function redColor(){

  background("red");

}
function greenColor(){
  background("green");

}





