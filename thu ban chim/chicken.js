class Chicken {

constructor (x, y)
 {
    this.x = x;
       this.y = y;
       this.rotate = 1.5559;
       this.r = 30;
       this.xdir = 1;
show()
 {
     push();
     noStroke();
     translate(this.x, this.y);
     scale(0.8, 0.8);
    // rotate(this.rotate);
     
     ellipse(0, 0, 40, 40);
     fill('blue');
     pop();
 }


 move()
  {
    this.x = this.x + this.xdir;
}

shiftDown()
 {
    this.xdir *= -1;
    this.y += this.r;
}
subBlood()
 {
    this.blood -= 1;
}
}}