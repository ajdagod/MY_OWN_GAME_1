const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,world;
var backimg;

function preload(){
backimg=loadImage("background.jpeg");


}

function setup(){
engine=Engine.create();
world=engine.world;
canvas=createCanvas(700,450);
enemy1=new enemy(200,200);
}

function draw(){    
background(backimg);
enemy1.display();
}

