document.write("<script language=javascript src='./js/Bird.js'></script>");
console.log("引入成功");
var Tunnel = function (upImg,downImg,x,speed,ctx) {
    this.upImg = upImg;
    this.downImg = downImg;
    this.x = x;
    this.speed = speed;
    this.ctx = ctx;
    this.num = 4;
    this.y_1 = (Math.random()*150+150);
    this.y_2 = this.y_1+Math.random()*100+150;
    Tunnel.prototype.draw = function () {
        this.ctx.drawImage(this.upImg,this.x,this.y_1-420);
        this.ctx.drawImage(this.downImg,this.x,this.y_2);
    }
    Tunnel.prototype.setNum = function (num) {
        this.num = num;
    }
    Tunnel.prototype.update = function (duration) {
        this.x = this.x+this.speed*duration;
        if(this.x<-52){
            this.x = this.num*200+150+this.x;
            this.y_1 = (Math.random()*200+120);
        }
    }
    /**
     * @return {boolean}
     */
    Tunnel.prototype.Collide=function(x,y){
        return (x > this.x && x<this.x+52) && (!(y>this.y_1 && y< this.y_2));
        //return ( x>this.x && x<this.x+52 ) && (!( y>this.y_1 && y<this.y_1+150));
    }
}