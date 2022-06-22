class Drop 
{
    constructor (x, y)
    {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.rotate = -1.5559;
    this.speed = 10;

   // this.show = function() 
    show() 
    {
        push()
        noStroke();
        translate(this.x, this.y + 30);
        rotate(this.rotate);

        for(let i = 0; i > -5; i--) {
         // fill(color(255, 255, 255, 255 + i * 12));
         fill(color('red'));
          rect(i * this.speed * 0.5 + 60 + this.speed * 3, 0, 5, 5 + i * 0.1);
        }

        pop();
    }
    this.toDel = false;
    
    this.hits = function(chicken) {
        var d = dist(this.x, this.y, chicken.x, chicken.y);
        if (d < this.r + chicken.r + 30) {
            return true;
        }
        
        return false;
    }
    
    this.remove = function () {
        this.toDel = true;
    }
   
}}