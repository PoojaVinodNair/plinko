class Ball{
  constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'frictionAir':0.005,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;
      
      this.color=color(random(0,255),random(0,255),random(0,255));

      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse( 0, 0, this.radius,this.radius);
      pop();
    }
}