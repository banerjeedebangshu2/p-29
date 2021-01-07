class Block {

    constructor(x,y,width,height) {

        var options = {

            'restitution': 0.3,
            'friction': 0.5,
            'density': 1,

        }


        this.body = Bodies.rectangle(x,y,width,height,options);

        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(f) {

        var pos = this.body.position;
        
        stroke("black");
        strokeWeight(2.2);
        fill(f);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}