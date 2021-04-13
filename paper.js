class Paper
{
	constructor()
	{
		var options={
			restitution:0,
            friction:0,
            density:1.2,			
			}
		
		this.body=Bodies.rectangle (250,540,20,20,options);
        this.image= loadImage("paper.png")
 		World.add(world, this.body);


	}
	display()
	{
			
			var groundPos=this.body.position;		
            var angle= this.body.angle
			push()
			translate(groundPos.x, groundPos.y);
            rotate(angle)
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,50,50);
			pop()

			
	}

}