var Bird = function (img,x,y,speed,a,ctx) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.a = a;//加速度
    this.ctx = ctx;
    this.index = 0;
    this.duragther = 0;
    Bird.prototype.draw = function () {
        this.ctx.save();
        this.ctx.translate(this.x,this.y);
        this.ctx.rotate((Math.PI/6)*this.speed/0.3);
        this.ctx.drawImage(this.img,52*this.index,0,52,45,-52/2,-45/2,52,45);
        this.ctx.restore();
    }
    Bird.prototype.update = function (duration) {
        this.duragther += duration;
        if(this.duragther >100){
            this.index++;
            if(this.index === 2){
                this.index=0;
            }
            this.duragther -=100;
        }
        this.y = this.speed*duration+0.5*this.a*duration*duration+this.y;
        this.speed = this.speed+this.a*duration;
    }
}