Background = function (img,x,speed,ctx) {
    this.img=img;
    this.x=x;
    this.speed = speed;
    this.ctx = ctx;
    this.num = 2;
    Background.prototype.draw = function () {
        console.log(this.img.src);
        this.ctx.drawImage(this.img,this.x,0);
    }
    Background.prototype.setNum = function (num) {
        this.num = num;
    }
    Background.prototype.update = function (duration) {
        this.x = this.x+duration*this.speed;
        if(this.x<-800){
            this.x = this.num*800+this.x;
        }
    }

}