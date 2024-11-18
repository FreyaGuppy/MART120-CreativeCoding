var playerX = 380;
var playerY = 20;

var enemy1x = 265;
var enemy1y = 25;

var enemy2x = 85;
var enemy2y = 165;

var mouseShapeX;
var mouseShapeY;

function setup()
{
  createCanvas(400, 400);
  enemy1xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  enemy1ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  enemy2xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  enemy2ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw() 
{
  background (0);
  createGrid();
  createExit ();

  createPlayer ();
  displayWin ();
  
  //I tried putting the code in my keyPressed funtion into a new "playerMoevemnt" funtion, but I think since I am using the "key pressed" function as opposed to the one where oyu can hold down the key to make it move, it doesnt work if it is called in the draw funtion becuase it will call it continuously. When I tried it, as soon as I pressed one key, it would move in that direction coninuously until I pressed a different key to change directions. So I will be leaving it out of the draw funtion. Is there a way to use this type of movement in the draw function that I am missing?

  createEnemies ();
  moveEnemy1 ();
  moveEnemy2 ();

  mouseShape ();  
}

function createGrid ()
{
//grid
stroke('magenta');
strokeWeight(0.5);
line(20, 0, 20, 400);
line(40, 0, 40, 400);
line(60, 0, 60, 400);
line(80, 0, 80, 400);
line(100, 0, 100, 400);
line(120, 0, 120, 400);
line(140, 0, 140, 400);
line(160, 0, 160, 400);
line(180, 0, 180, 400);
line(200, 0, 200, 400);
line(220, 0, 220, 400);
line(240, 0, 240, 400);
line(260, 0, 260, 400);
line(280, 0, 280, 400);
line(300, 0, 300, 400);
line(320, 0, 320, 400);
line(340, 0, 340, 400);
line(360, 0, 360, 600);
line(380, 0, 380, 400);
line(0, 20, 400, 20);
line(0, 40, 400, 40);
line(0, 60, 400, 60);
line(0, 80, 400, 80);
line(0, 100, 400, 100);
line(0, 120, 400, 120);
line(0, 140, 400, 140);
line(0, 160, 400, 160);
line(0, 180, 400, 180);
line(0, 200, 400, 200);
line(0, 220, 400, 220);
line(0, 240, 400, 240);
line(0, 260, 400, 260);
line(0, 280, 400, 280);
line(0, 300, 400, 300);
line(0, 320, 400, 320);
line(0, 340, 400, 340);
line(0, 360, 400, 360);
line(0, 380, 400, 380);
//border
strokeWeight (6);
line (0, 0, 0, 400);
line (0, 0, 400, 0);
line (400, 0, 400, 400);
line (0, 400, 19, 400);
line (61, 400, 400, 400);
}

function createPlayer ()
{
  fill(0, 255, 255);
  stroke ('magenta');
  strokeWeight(2);
  circle (playerX, playerY, 20);
}

function displayWin ()
{
  // check to see if the character has left the exit
  if(playerX > 20 && playerX <60 && playerY > 380)
  {
      fill(255);
      stroke(5);
      textSize(26);
      text("You Made It!", 120, 150);
  }
}

function keyPressed ()
{
  //character movement controls
  if (key == 'd')
    {
      playerX+=20;
    }
  else if (key == 'a')
    {
      playerX-=20;
    }
  else if (key == 'w')
    {
      playerY-=20;
    }
  else if (key == 's')
    {
      playerY+=20;
    }

}

function mouseShape ()
{
  //mouse click shape
  fill (255, 179, 0);
  stroke (255, 179, 0);
  circle (mouseShapeX, mouseShapeY, 10)
}

function createEnemies ()
{
  //enemy1
  fill (255, 0, 0);
  strokeWeight(1);
  stroke (255, 0, 0);
  square(enemy1x, enemy1y, 10);

    

  //enemy2
  fill (255, 106, 0);
  stroke (255, 106, 0);
  square (enemy2x, enemy2y, 10);

    
}

function moveEnemy1 ()
{
  // get a random speed when it first starts
  enemy1xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
  enemy1ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);

  // move the shape
  enemy1x += enemy1xSpeed;
  enemy1y += enemy1ySpeed;

  // check to see if the shape has gone out of bounds
  if(enemy1x > 400)
  {
      enemy1x = 0;
  }
  if(enemy1x < 0)
  {
      enemy1x = 400;
  }
  if(enemy1y > 400)
  {
      enemy1y = 0;
  }
  if(enemy1y < 0)
  {
      enemy1y = 400;
  }
}

function moveEnemy2 ()
{
  // get a random speed when it first starts
  enemy2xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  enemy2ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  // move the shape
  enemy2x += enemy1xSpeed;
  enemy2y += enemy1ySpeed;

  // check to see if the shape has gone out of bounds
  if(enemy2x > 400)
  {
      enemy2x = 0;
  }
  if(enemy2x < 0)
  {
      enemy2x = 400;
  }
  if(enemy2y > 400)
  {
      enemy2y = 0;
  }
  if(enemy2y < 0)
  {
      enemy2y = 400;
  }
}

function createExit ()
{
  //exit
  textSize(18);
  fill(51, 255, 0);
  stroke(0);
  strokeWeight(4);
  text ('EXIT', 20, 380);

  stroke(51, 255, 0);
  line (10, 380, 20, 400);
  line (70, 380, 60, 400);
}

function mouseClicked()
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }