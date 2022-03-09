
let p;
let num =8;
let rectX = 0;
let rectY = 200;

let fr = 30; //starting FPS
let clr1
let clr
let bs =[];

let direction = 'right';

let scoreElem;

function setup() {
  createCanvas(400, 400);
  
  //分數
  scoreElem = createDiv('Second = ');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');
  second()
  frameRate(30);
  stroke(255);
  strokeWeight(10);
  
  //  放置物件到定位
  for(let i=100; i<=width-100; i=i+(width/num)){
    for(let j=100; j<=height-100; j=j+(height/num)){
       bs.push(new newBLOCK(i,j,50,50))
      
    }
  }
  bs.forEach((v)=>{
    v.mx = random(-2,2)
    v.my = random(-2,2)
  })
  
  b = new newBLOCK(100,100,100,100);
  rectMode(CENTER);
  angleMode(DEGREES);
  
}


function draw() {
 // console.log(scoreElem)
 scoreElem.elt.textContent='Second = ' + int(frameCount/30)
  p=new particle()
 background(0,10);
 
//正方形白
 // Move Rectangle
  rectX = rectX += 1;
  
 // If you go off screen.
    if (rectX >= width) {
     rectX = 0;
  }

  //(正方形白的設定)
   rect(rectX, rectY, 20, 20);
   clr1 = color(0,255,0)
   fill(clr1)
  

   // 將各物件執行display能力
   bs.forEach((v)=>{
    v.display();
   })
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    rectY-=50;
  } else if (keyCode === DOWN_ARROW) {
    rectY+=50;
  }
}
// 自訂物件
class newBLOCK{
//   建構函式
  constructor(x,y,w,h){
    this.x=x;
    this.y=y;
    this.w=10;
    this.h=h;
    this.mx=3;
    this.my=1;
  }

  //圓形紅
 display(){
push();
    translate(this.x,this.y)
  //(圓形紅的設定)
  circle(0,0,this.w);
 
  fill(map(noise(frameCount*0.01+10),0,1,0,255))
pop();
   
     if (this.x>width-this.w/2 || this.x<this.w/2) {this.mx = -1*this.mx;}
    if (this.y>height-this.w/2 || this.y<this.h/2) {this.my = -1*this.my;}
    this.x = this.x+this.mx;
    this.y = this.y+this.my;
}
}

class particle{
//建構
  constructor(x=width/2,y=height/2,d=50){
    this.x=x
    this.y=y
    this.d=d
    this.mx=0
    this.my=0
  }
//能力
  display(){
    this.move()
    noStroke()
    fill(map(noise(frameCount*0.01+10),0,1,0,255))
    push()
     translate(this.x,this.y)
     circle(0,0,this.d)
    pop()
  }
  move() {
    this.x+=this.mx // 另一種寫法this.x=this.x+this.mx
    this.y+=this.my
  }
}


              

                   



