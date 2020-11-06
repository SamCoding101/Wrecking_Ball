class Ball{
    constructor(x,y,r){
      var options = {

        friction:1,
        density:1.2,
        restitution:0

      }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;

    World.add(world,this.body);
    
     }
    
    display(){
      var pos = this.body.position;
      fill("black");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.r)
    }
  }