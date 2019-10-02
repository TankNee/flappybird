var Ground = function (img,x,speed,ctx) {
    this.img = img;
    this.x = x;
    this.speed = speed;
    this.ctx = ctx;
    this.num = 4;
    this.y = 600-112;
    Ground.prototype.draw = function () {
        this.ctx.drawImage(this.img,this.x,this.y);
    }
    Ground.prototype.setNum = function(num){
        this.num = num;
    }
    Ground.prototype.update = function (duration) {    //这里的duration是两帧之间的时间差。
        this.x = this.x + this.speed*duration;
        if(this.x<-336){
            this.x = this.num*336+this.x;
        }
    }
}