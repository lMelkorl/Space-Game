export class Bullet{
    dead = false;
    speed = 10;

    constructor(xPos,yPos){
        this.xPos = xPos
        this.yPos = yPos
    }

    update = () => {
        this.yPos -= this.speed;

        if(this.yPos < 0 || this.yPos > 550){
            this.dead = true
        }
    }

    draw = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.xPos,this.yPos,5,0,2*Math.PI);
        ctx.fillStyle = "#1F51FF";
        ctx.fill();
        ctx.lineWİdth = 5;
        ctx.stroke()
    }
}

export default Bullet;