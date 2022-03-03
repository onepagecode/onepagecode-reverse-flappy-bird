function Bird()
{
    var graphics_up = loadImage("assets/bird_up.png");
    var graphics_down = loadImage("assets/bird_down.png");
    var graphics;

    this.x = width;
    this.y = random(100, height - 200);

    this.width = 42;
    this.height = 30;

    this.wiggle = 10;

    this.update = function()
    {
        this.x += movementSpeed;

        this.y += sin(frameCount / this.wiggle) * 0.5;
    }

    this.show = function()
    {
        if ((int)(frameCount / 10) % 2 == 0)
            graphics = graphics_up;
        else
            graphics = graphics_down;

        image(graphics, this.x, this.y, this.width, this.height);
    }

    this.offscreen = function()
    {
        return this.x < 0;
    }

    this.hits = function(pipe)
    {
        if (this.x < pipe.x + pipe.thickness && this.x + this.width > pipe.x)
            if (this.y < pipe.cutPos || this.y + this.height > pipe.cutPos + pipe.cutSize)
                return true;

        return false;
    }
}