var car, wall;
var rate, weight;

function setup() {
  createCanvas(1200,400);
 
  rate=random(55,90);
  weight=random(400,1500);

 wall=createSprite(1000, 200, 60,400);
 car=createSprite(40,200,50,50);
 car.velocityX=rate;
 car.shapeColor=color(255);
  
  console.log(rate);
}

function draw() {
  background("black");  

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*rate*rate/22500;
    console.log(deformation);
    if (deformation>180)
    {
        car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
   {
      car.shapeColor=color(230,230,0);
   }

   if (deformation<100)
   {
      car.shapeColor="green";
   }
  }

  drawSprites();
}