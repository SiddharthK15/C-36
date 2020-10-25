var database;
var gamestate = 0;
var playercount, form, game, player;
var playerdata;
var distance 


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game = new Game();
game.getState();
game.start();
  
}

function draw(){
  if(playercount === 4){
    game.update(1);
  }
  if(gamestate == 1){
    clear();
    game.play();

  }
  
   
    
  
}

