var yEyebrow = 125;

var xLeftEar = 75;
var xRightEar = 325;

var xStar = 30;
var yStar = 75;

var size = 25;
var count = 0;

var movementEyebrow;
var movementEar;
var movementStar;
var movementText;

function setup()
    {
        createCanvas(400,500);
    }
    movementEyebrow = 0.5;
    movementEar = 0.5;
    movementStar = 1;
    movementText = 1;
    // whenever I try to use "floor(random() * 10)+1" as the movement speed, it just makes my ear disappear. I dont know why.

function draw()
    {
        //background
        background(19, 22, 46);
        stroke (255,255,255);
        point(xStar, yStar);
        point(230, 25);
        point(100, 15);
        point(300, 75);
        point(350, 55);
        point(50, 120);
        point(360, 125);
        point(80, 60);
        point(20, 200);
        point(375, 220);

        //hair
        fill (87, 56, 30);
        stroke (87, 56, 30);
        circle(200,200,300);
        rect(50,187,300,400);

        //face background
        fill (245, 187, 137);
        stroke (245, 187, 137);
        circle(200,200,250);
        rect (150, 300, 100, 50);
        ellipse(xLeftEar,210,50,60);
        ellipse(xRightEar,210,50,60);

        //glasses
        fill (232, 255, 250);
        stroke (13, 28, 25);
        circle (150, 190, 100);
        circle (250, 190, 100);
        line(100, 190, 75, 176);
        line(300, 190, 325, 176);
        
        //nose
        fill (222, 156, 106);
        stroke (222, 156, 106);
        triangle(180, 250, 200, 204, 200, 250);
        fill (255, 217, 184);
        stroke (255, 217, 184);
        triangle(220, 250, 200, 204, 200, 250);

        //mouth
        fill (138, 64, 51);
        stroke (138, 64, 51);
        ellipse (200, 275, 50, 20);

        //eyebrows
        fill (87, 56, 30);
        stroke (87, 56, 30);
        ellipse (150, yEyebrow, 60, 10);
        ellipse (250, yEyebrow, 60, 10);

        //body
        fill (49, 94, 44);
        stroke (49, 94, 44);
        rect (100, 350, 200, 150);
        circle (100, 410, 120);
        circle (300, 410, 120);
        rect (40, 410, 55, 100);
        rect (305, 410, 55, 100);

        //text
        fill (19, 22, 46);
        stroke (19, 22, 46);
        textFont ('palatino', [15]);
        text('Freya', 100, 345);

        fill (200);
        textSize (size)
        text('Self Portrait', 30, 30);

        
        //eyebrow animation (y axis)
        if(yEyebrow >= 130 || yEyebrow <= 120)
        {
            movementEyebrow *= -1;
        }
        yEyebrow += movementEyebrow;

        
        //ear animation (x axis)
        if(xLeftEar >= 80 || xLeftEar <=70)
        {
            movementEar *= -1;
        }
        xLeftEar += movementEar;

        if(xRightEar >= 330 || xRightEar <= 320)
        {
            movementEar *= -1;
        }
        xRightEar += movementEar;
            //The ears start out moving quickly and then slow down and slowly move to the right. I do not know why.


        //star animation (diagonal)
        if(xStar <= 0 && yStar <= 0 || xStar >=400 && yStar >=500)
        {
            movementStar *= -1;
        }
        xStar += movementStar;
        yStar += movementStar;
            //The star goes past the edges of my canvas, but does bounce back and fourth. Again, not really sure why, but I'm going to count this one.
        
        
        //text animation
        size+= movementText;
        count++;
        if(count > 5)
        {
            movementText *=-1;
            count = 0;
        }
        
    }