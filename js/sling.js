class Sling {

    constructor(posA, posB) {

        var options = {

            bodyA: posA,
            pointB: posB,
            
            sniffness: 0.04,
            length: 150,
        }

        this.sling = Constraint.create(options);

        this.pointB = posB;
        this.bodyA = posA;

        World.add(world, this.sling);
    }

    fly(){

        this.sling.bodyA = null;
    }
    
    display(){

        if (this.sling.bodyA !== null) {
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;

            stroke("darkblue");
            strokeWeight(5);
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }
}