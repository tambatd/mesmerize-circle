function setup() {
  createCanvas(11000, 17000);
  noStroke();
  for(i=20;i<975;i+=150){
  for(j=20;j<975;j+=50){
textSize(32);
text("Click Me!", i, j);
  }
}

}

function draw(){
  
  


}

function touchStarted(){
  background(random(255), random(255), random(255));
  for(i=20;i<17000;i+=25){
  for(j=20;j<17000;j+=20){
    fill(color(random(255), random(255),     random(255)));
    circle(i, j, random(20)); 
       // square(i, j, random(20)); 
  }
}
}
