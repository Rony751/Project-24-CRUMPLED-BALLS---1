class Dustbin {    
    constructor(x, y, width, height) {
		this.body = Bodies.rectangle(x, y, width, height, {isStatic:true});
		this.width = width;
		this.height = height;
		World.add(world, this.body);
	}
	
    display() {
		var pos = this.body.position;		
		rectMode(CENTER);
		fill(255);
		strokeWeight(3)
		stroke(10);
		rect(pos.x, pos.y, this.width, this.height);
    }
}