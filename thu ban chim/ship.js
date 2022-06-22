function Ship() {
    //this.x = width / 2;
    //  this.xdir = 0;

    this.show = function() {
        //  fill(255);
        //  rectMode(CENTER);
        // vẽ phi thuyền

        rectMode(CENTER)
        fill('yellow');
        push();
        noStroke();
        rect(mouseX, height - 40, 40)
            //push();
            // noStroke();
            // translate(this.x, height - 10);
            // scale(0.8, 0.8);
            //  fill('blue');
            //  circle(0, 0, 40, 40);
            //  fill('orange');
            //  rect(0, -25, 10, 25);
        pop();
    }

    this.setDir = function(dir) {
        this.xdir = dir;
    }

    this.move = function() {
        this.x += this.xdir * 5;

    }
}