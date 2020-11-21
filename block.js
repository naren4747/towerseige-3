class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255;
      
    }
    display(){
      if(this.body.speed < 3){
        super.display();
       }
       else{
         World.remove(world,this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         
         //rect(this.body.position.x, this.body.position.y, this.height, this.width);
         //console.log(this.Visiblity)
         pop();
       }
    }
  };