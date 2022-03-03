function Pipe()
{
    graphics_body = loadImage("assets/pipe_body.png");
    graphics_up = loadImage("assets/pipe_up.png");
    graphics_down = loadImage("assets/pipe_down.png");

    this.x = 60;
    this.thickness = 40;
    this.endSize = 19;
    this.cutSize = 100;
    this.cutPos = height / 2;

    this.velocity = 0;
    this.gravity = 0.2;
    this.liftVelocity = 5;

    this.reset = function()
    {
        this.cutPos = height / 2;
        this.velocity = 0;
    }

    this.show = function()
    {
        image(graphics_body, this.x, 0, this.thickness, this.cutPos - this.endSize);
        image(graphics_up, this.x, this.cutPos - this.endSize, this.thickness, this.endSize);

        image(graphics_down, this.x, this.cutPos + this.cutSize, this.thickness, this.endSize);
        image(graphics_body, this.x, this.cutPos + this.cutSize + this.endSize, this.thickness,
            (height - groundHeight) - (this.cutPos + this.cutSize + this.endSize));
    }

    this.update = function()
    {
        this.velocity += this.gravity;
        this.cutPos += this.velocity;

        this.cutPos = constrain(this.cutPos, this.endSize + 1, (height - groundHeight) - (this.cutSize + this.endSize) - 1);
    }

    this.lift = function()
    {
        this.velocity = -this.liftVelocity;
    }
}