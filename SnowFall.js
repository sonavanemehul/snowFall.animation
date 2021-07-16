class SnowFall {
    constructor(x,y){
        var options ={
            'restitution':0.1,
            'friction':0.01
        }
        this.body = Bodies.circle(x, y, 50, options);
       // this.radius = 5;
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
    }

    
    

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,50,50);
    }
}