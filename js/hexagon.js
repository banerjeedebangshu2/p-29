class Hexagon {

    constructor(x,y,width,height) {

        var options = {

            'restitution': 0.3,
            'friction': 0.5,
            'density': 1,

        }


        this.body = Bodies.rectangle(x,y,width,height,options);

        this.image = loadImage("polygon.png");

        this.width = width;
        this.height = height;

        World.add(world,this.body);


    }

    display() {

        var pos = this.body.position;
        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);

        //rectMode(CENTER);
        //rect(pos.x, pos.y, this.width, this.height);


    }

}