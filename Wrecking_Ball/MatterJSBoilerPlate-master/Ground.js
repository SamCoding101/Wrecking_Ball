class Ground{
    constructor(x,y,w,h){
      var options = {

        isStatic:true,
        friction:1,
        density:1.2,
        restitution:0

      }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;

    World.add(world,this.body);
    
     }
    
    display(){
      var pos = this.body.position;
      fill("black");
      rectMode(CENTER);
      rect(pos.x,pos.y,this.w,this.h) ;
     }
    }