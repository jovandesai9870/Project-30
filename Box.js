class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction : 0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visiblity=20;
      World.add(world, this.body);
    
    }
    display(){
      if(this.body.speed>3){
      World.remove(world,this.body);
      push()
      this.Visiblity=this.Visiblity-5;
      tint(255,this.Visiblity);
      pop()
      }
      else{
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(5);
      stroke("black");
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
      }
    }
    
}