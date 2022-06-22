var ship;
var begin;

var drops = [];
var chickens = [];
var createChicken;
//tao 3 level theo interval xuat hien cua trung
var level = {
    easy: 2000,
    medium: 1000,
    hard: 600,
};
var score = 0;


function setup() {
    //tao canvas
    createCanvas(500, 400);
    //khoi tao cai dat game
    ship = new Ship();
    document.getElementById("start").addEventListener("click", () => {

        chickens = [];
        score = 0;
        let l = document.getElementById('level').value;

        document.getElementById('gameover').innerText = '';
        document.getElementById('score').innerText = 0;
        document.getElementById('win').innerText = ''

        //khoi tao interval cho trung xuat hien ngau nhien trong Canvas
        createChicken = setInterval(function() {
            chickens.push(new Chicken(Math.floor(Math.random() * 500), Math.floor(Math.random() * 100)));
        }, level[l]);
    });
    document.addEventListener('click', function(e) {
        if (document.activeElement.toString() == '[object HTMLButtonElement]') {
            document.activeElement.blur();
        }
    });
}

function draw() {

    rectMode(CENTER);
    background('brown');
    ship.show();
    ship.move();

    for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();

        for (var j = 0; j < chickens.length; j++) {
            if (drops[i].hits(chickens[j])) {

                document.getElementById('score').innerText = (score += 1)
                chickens.splice(j, 1);
                //  }
                drops[i].remove();

                //10 diem thi ban thang game
                if (score == 10) {

                    chickens = [];
                    document.getElementById('win').innerText = 'You Win!'

                    clearInterval(createChicken);
                }

            }
        }
    }
    //khoi tao trung ga
    var edge = false;
    for (var i = 0; i < chickens.length; i++) {
        chickens[i].show();
        chickens[i].move();
        //trung cham 2 canh thi quay lai
        if (chickens[i].x > width - 10 || chickens[i].x < 10) {
            edge = true;
        }
        // neu trung cham cuoi khung thì thua
        if (chickens[i].y > height) {


            document.getElementById('gameover').innerText = 'Game Over'
            chickens = [];
            clearInterval(createChicken);

        }
    }

    if (edge) {
        for (var i = 0; i < chickens.length; i++) {
            chickens[i].shiftDown();
        }
    }

    for (var i = drops.length - 1; i >= 0; i--) {
        if (drops[i].toDel) {
            drops.splice(i, 1);
        }
    }
}





function keyPressed() {
    if (key === ' ') {

        var drop = new Drop(mouseX, height);

        drops.push(drop);
    }

}

function keyReleased() {
    if (key !== ' ') {
        ship.setDir(0)
    }
}



function Drop(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.rotate = -1.5559;
    this.speed = 10;
    this.toDel = false;

    this.show = function() {
        push()
        noStroke();
        translate(this.x, this.y + 10);
        rotate(this.rotate);

        for (let i = 0; i > -5; i--) {
            fill(color(200, 100, 255, 255 + i * 12));
            rect(i * this.speed * 0.5 + 60 + this.speed * 3, 0, 5, 5 + i * 0.1);
        }

        pop();
    }


    this.move = function() {
            this.y = this.y - this.speed;
        }
        //va cham them ham hits
    this.hits = function(chicken) {
        var d = dist(this.x, this.y, chicken.x, chicken.y);
        if (d < this.r + chicken.r + 5) {
            return true;
        }

        return false;
    }

    this.remove = function() {
        this.toDel = true;
    }

    if (this.y == 0) { this.toDel = true; }
}


function Ship() {

    this.show = function() {


        rectMode(CENTER)
        fill('yellow');
        push();
        noStroke();

        rect(mouseX, height - 30, 40)

        pop();
    }



    this.move = function() {
        // this.x += this.xdir * 5;

    }
}

function Chicken(x, y) {

    this.x = x;
    this.y = y;

    this.r = 20;
    this.xdir = 1;

    this.show = function() {
            push();
            noStroke();
            translate(this.x, this.y);

            rotate(this.rotate);

            fill('blue');
            circle(0, 0, 40, 40);

            pop();
        }
        // trung di chuyen ngang
    this.move = function() {
            this.x = this.x + this.xdir;
        }
        //di chuyen qua lai va di chuyen xuong
    this.shiftDown = function() {
        this.xdir *= -1;
        this.y += 15;
    }


}