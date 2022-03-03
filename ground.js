function Ground()
{
    this.x = 0;
    var graphics = loadImage("assets/ground.png");

    this.update = function()
    {
        this.x += movementSpeed;

        if (this.x <= -width)
            this.x = 0;
    }

    this.show = function()
    {
        image(graphics, this.x, height - groundHeight);
    }
}