var c= document.getElementById("myCanvas");
var m=c.getContext("2d");

var bg = new Image();
bg.src = "./img/bg.jpg";
bg.onload = function(){
    m.drawImage(bg,0,0);
}
var ground = new Image();
ground.src = "./img/ground.jpg";
ground.onload = function () {
    m.drawImage(ground,0,488);
    m.drawImage(ground,336,488);
    m.drawImage(ground,336*2,488);
}
var tunnal = new Image();
tunnal.src = "./img/上管道.jpg";
tunnal.onload = function () {
    var x =800;
    var y =0;
    var speed = 10;
    function draw() {
        if(x>-56){
            m.clearRect(0,0,c.width,c.height);
            x-=speed;
            bg.onload();
            ground.onload();
            m.drawImage(tunnal,x,y);
            window.requestAnimationFrame(draw);
        }else {
            x=800;
            window.requestAnimationFrame(draw);
        }

    }
    draw();
}



var Land = function (img,x,speed,ctx) {
    this.img = img;
    this.x = x;
    this.speed = speed;
    this.ctx = ctx;
}
Land.prototype.draw = function () {
    this.img.onload = function () {
        this.ctx.drawImage(this.img,this.x,488);
    }
}

