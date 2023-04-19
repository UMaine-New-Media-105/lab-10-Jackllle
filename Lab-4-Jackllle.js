
let frogitX = 340;
let frogitY = 500;
let carNumber = [5];
let newFrog; 
function setup() {
  createCanvas(800, 600);
  newFrog = new frogit(frogitX,frogitY)
  
  
}

function draw() {
  background(220);
  addBackround()
  newFrog.show()
  for (let j = 0; j < 5; j++){
    
  }



    
}

class frogit{
  constructor(x,y){
    this.x = x
    this.y = y 
  }
  move(x,y){
    this.xOff = x 
    this.yOff = y
    this.x = this.x + this.xOff
    this.y = this.y + this.yOff
  }
  show(){
  push()
    noStroke();
   fill("rgb(86,56,24)");
  rect(this.x,this.y,60)
    rect(this.x +20,this.y+50,20)
 rect(this.x -20,this.y+30,20)
   rect(this.x -20,this.y+30,5,30) 
     rect(this.x +60,this.y+30,20,19) 
    rect(this.x +60,this.y+30,20)
    
    
  pop()
  }
}

function addBackround(){
  push()
  noStroke()
  fill("rgb(101,222,101)")
  rect(0,0,800,100)
  rect(0,250,800,100)
  rect(0,500,800,100)
  fill("rgb(0,0,0)")
  rect(0,350,800,220)
  fill("rgb(25,25,129)")
  rect(0,100,800,150)
  pop()
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    newFrog.move(0,-50)
  }else if (keyCode === DOWN_ARROW){
    newFrog.move(0,50)
  }else if(keyCode === RIGHT_ARROW){
    newFrog.move(50,0)
  }else if(keyCode === LEFT_ARROW)
    newFrog.move(-50,0)
}
