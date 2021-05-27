class Paper {
    constructor(x, y){
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }
        this.body = Bodies.circle(x, y, 20, options);
        World.add(myworld, this.body);
        this.radius = 20;
    }
    display(){
        translate(this.body.position.x, this.body.position.y);
        push();

        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y);

        pop();
    }
}