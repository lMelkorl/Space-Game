import img from './photos/player.png'
export class Player{
    dead = false;
    health = 100;
    ammo = 100;
    score = 0;
    speed = 25;
    firebullets = [];
    lastFireAt = Date.now();

    constructor(posX,posY){
        this.posX = posX;
        this.posY = posY;
    }

    deductHealth = () => {
        this.health -= 10
    }

    increaseScore = () =>{
        this.score += 10
    }

    update = (firecb) =>{
        document.onkeydown = (e) =>{
            if(e.keyCode === 39){
                this.posX += this.speed
            }
            if(e.keyCode === 37){
                this.posX -= this.speed
            }
        document.addEventListener("keypress",(e) => {
            if(e.keyCode === 32){
                if(Date.now() - this.lastFireAt > 250){
                    firecb(this.posX + 32,this.posY);
                    this.lastFireAt = Date.now();
                }
            }
        })
        }
        if(this.posX < -10 || this.posX > 890){
            this.dead = true
            gameOver(this.score);
        }
        if (this.health <= 0) {
            this.dead = true;
            gameOver(this.score);
        }
    }

    draw = (ctx) => {
        const image = new Image();
        image.src = img;
        ctx.drawImage(image,this.posX,this.posY,65,90);

        ctx.font = '16px Arial';
        ctx.fillStyle = "white";
        ctx.fillText(`Health: ${this.health}`, 950 - 95, 550 - 15);

        ctx.font = '16px Arial';
        ctx.fillStyle = "lightgreen";
        ctx.fillText(`Score: ${this.score}`, 15, 25);
    }
}


function gameOver(score) {
    document.body.innerHTML = `
    <center>
    <br/>
    <h2>Game Over!</h2>
    <p>Your Score: ${score}</p>
    <button class="btn btn-danger mt-2" onClick="location.reload()">Again</button>
    </center>
    `
}

export default Player;