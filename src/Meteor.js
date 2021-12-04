import img from './photos/meteors.png'
export class Meteor {
    speed = 4;
    dead = false;

    constructor(xPos,yPos){
        this.xPos = xPos;
        this.yPos = yPos;
    }

    isDead = () =>{
        if(this.yPos > 550){
            return true;
        }
    }

    update = (player,bullets) => {
        if (this.dead) return;
        this.yPos += this.speed;

        if(!this.dead && this.isDead()){
            this.dead = true;
        }

        if(!this.dead){
            bullets.forEach(bullet => {
                if(Math.abs(bullet.xPos - this.xPos) < 75 && Math.abs(bullet.yPos - this.yPos) < 100){
                    player.increaseScore();
                    this.dead = true;
                    bullet.dead = true;
                }
            });
        
            if(!this.dead){
            if(Math.abs(player.posX - this.xPos) < 65 && Math.abs(player.posY - this.yPos) < 90){
                this.dead = true;
                player.deductHealth();
                }
            }
        }
    
    }

    draw = (ctx) =>{
        const image = new Image();
        image.src = img;
        ctx.drawImage(image,this.xPos,this.yPos,75,100);
    }
}

export default Meteor;