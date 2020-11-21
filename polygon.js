class Polygon{
    constructor(x, y,sides,radius ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:false

        }
        this.body = Bodies.polygon(x,y,sides,radius)
        this.polygon_img = loadImage("polygon.png")
        fill("red")
        this.radius = radius
        this.sides = sides
        
       


        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER)
        
        
        image(this.polygon_img,0,0,this.sides,this.radius);
        pop();
      }
}