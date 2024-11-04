function setup()
    {
        createCanvas(400,500);
    }

function draw()
    {
        //background
        background(19, 22, 46);
        stroke (255,255,255);
        point(30, 75);
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
        ellipse(75,210,50,60);
        ellipse(325,210,50,60);

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
        ellipse (150, 125, 60, 10);
        ellipse (250, 125, 60, 10);

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
        textFont ('serif', [25]);
        text('Self Portrait', 30, 30);
    }
