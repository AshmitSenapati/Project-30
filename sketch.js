const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world

function setup() {
var canvas = createCanvas(1000,500)
   engine = Engine.create()
    world = engine.world

    ground = new Ground(500,480,1000,15)

    ball = new Polygon(200,300,20)

    stand1 = new Ground(500,400,200,10)
    stand2 = new Ground(850,200,150,10)

    sling = new Sling(ball.body,{x:200,y:350})
    
    box1 = new Box(425,390,25,25);
    box2 = new Box(450,390,25,25);
    box3 = new Box(475,390,25,25)
    box4 = new Box(500,390,25,25)
    box5 = new Box(525,390,25,25)
    box6 = new Box(550,390,25,25)
    box7 = new Box(575,390,25,25)

    box8 = new Box(437.5,370,25,25)
    box9 = new Box(462.5,370,25,25)
    box10 = new Box(487.5,370,25,25)
    box11 = new Box(512.5,370,25,25)
    box12 = new Box(537.5,370,25,25)
    box13 = new Box(562.5,370,25,25)

    box14 = new Box(450,340,25,25)
    box15 = new Box(475,340,25,25)
    box16 = new Box(500,340,25,25)
    box17 = new Box(525,340,25,25)
    box18 = new Box(550,340,25,25)

    box19 = new Box(462.5,310,25,25);
    box20 = new Box(487.5,310,25,25);
    box21 = new Box(512.5,310,25,25);
    box22 = new Box(537.5,310,25,25);

    box23 = new Box(475,280,25,25);
    box24 = new Box(500,280,25,25);
    box25 = new Box(525,280,25,25);

    box26 = new Box(487.5,250,25,25);
    box27 = new Box(512.5,250,25,25);

    box28 = new Box(500,220,25,25);


    box29 = new Box(800,190,25,25)
    box30 = new Box(825,190,25,25)
    box31 = new Box(850,190,25,25)
    box32 = new Box(875,190,25,25)
    box33 = new Box(900,190,25,25)

    box34 = new Box(812.5,160,25,25)
    box35 = new Box(837.5,160,25,25)
    box36 = new Box(862.5,160,25,25)
    box37 = new Box(887.5,160,25,25)

    box38 = new Box(825,120,25,25)
    box39 = new Box(850,120,25,25)
    box40 = new Box(875,120,25,25);
    
    box41 = new Box(837.5,95,25,25);
    box42 = new Box(862.5,95,25,25);
    
    box43= new Box(850,70,25,25);
    
    

    

    
}

function draw() {
background(200)
Engine.update(engine);

ground.display();

ball.display();

sling.display();

stand1.display();
stand2.display();

fill("cyan")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();

fill("violet")
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();

fill("grey")
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();

fill(210)
box19.display();
box20.display();
box21.display();
box22.display();

fill("green")
box23.display();
box24.display();
box25.display();

fill("red")
box26.display();
box27.display();

fill("orange")
box28.display();

box29.display();
box30.display();
box31.display();
box32.display();
box33.display();

fill("red")
box34.display();
box35.display();
box36.display();
box37.display();

fill("green")
box38.display();
box39.display();
box40.display();

fill("cyan")
box41.display();
box42.display();

fill("violet")
box43.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX ,y:mouseY})
}

function mouseReleased() {
    sling.fly()
}

function keyPressed() {
    if(keyCode === 32){
    Matter.Body.setPosition(ball.body,{x:200,y:300})
    sling.attach(ball.body)
    }
}