class Sling{
    constructor(bodyA,pointB){
        var options = {

            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            lenght:10
      
          }
         this.sling = Constraint.create(options);
         this.pointB = pointB;
         World.add(world,this.sling);

    }
    
display(){
  if(this.sling.bodyA)
    var posA = this.sling.bodyA.position;
    var posB = this.sling.pointB;
    stroke(2);
    strokeWeight(3);
    line(posA.x,posA.y,posB.x,posB.y);

}
 }
