var Sky = function (img,x,speed,ctx) {
    this.img = img;
    this.x = x;
    this.speed = speed;
    this.ctx = ctx;
    Sky.prototype.draw = function () {
        console.log(this.img.src);
        this.img.onload = function () {
            this.ctx.drawImage(this.img,this.x,0);
        }

    }
    Sky.prototype.setNum = function(num){
        this.num = num;
    }
    Sky.prototype.update = function (duration) {    //这里的duration是两帧之间的时间差。
        this.x = this.x + this.speed*duration;
        if(this.x<-800){
            this.x = this.num*800+this.x;
        }
    }
}