const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var g1,g2,g3;

function setup() {
  createCanvas(480,600);
  
  g1=new Ground (240,580,480,20)
}

function draw() {
  background("black");  
  g1.display();
}