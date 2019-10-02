var canvas = document.getElementById("Mycanvas");
ctx = canvas.getContext("2d");

var tunnel1 = new Image();
tunnel1.src = "./img/上管道.jpg";
var tunnel2 = new Image();
tunnel2.src = "./img/下管道.jpg"
/*tunnel1.onload = function () {
    var x =800;
    var y_1 =-(Math.random()*100+100);
    var y_2 =tunnel1.height+y_1+150;
    var word = document.getElementById("ti");
    word.innerHTML=y_2;
    var speed = 5;
    function draw() {
        if(x > -56){
            ctx.clearRect(x+5,y_1,tunnel1.width,tunnel1.height);
            ctx.clearRect(x,y_2,tunnel2.width,tunnel2.height);
            x-=speed;
            //ctx.drawImage(bg,0,0);
            ctx.drawImage(tunnel1,x,y_1);
            ctx.drawImage(tunnel2,x,y_2);
            //ctx.drawImage(birds,100,100);
            window.requestAnimationFrame(draw);
        }else {
            //ctx.drawImage(bg,0,0);
            x=800;
            //ctx.drawImage(tunnel1,15,0);
            //ctx.drawImage(birds,100,100);
            window.requestAnimationFrame(draw);
        }

    }
    draw();
}*/

var sky1 = new Image();
sky1.src = "./img/bg.jpg";
var sky2 = new Image();
sky2.src = "./img/bg.jpg";
function run() {
    ctx.drawImage(sky1,0,0);
    window.requestAnimationFrame(run);
    var x =800;
    var y_1 =-(Math.random()*100+100);
    var y_2 =tunnel1.height+y_1+150;
    var word = document.getElementById("ti");
    word.innerHTML=y_2;
    var speed = 5;
    function draw() {
        if(x > -56){
            ctx.clearRect(0,0,0,0);
            //ctx.clearRect(x,y_2,tunnel2.width,tunnel2.height);
            x-=speed;
            //ctx.drawImage(bg,0,0);
            ctx.drawImage(sky1,0,0);
            ctx.drawImage(tunnel1,x,y_1);
            ctx.drawImage(tunnel2,x,y_2);
            //ctx.drawImage(birds,100,100);
            window.requestAnimationFrame(draw);
        }else {
            //ctx.drawImage(bg,0,0);
            x=800;
            //ctx.drawImage(tunnel1,15,0);
            //ctx.drawImage(birds,100,100);
            window.requestAnimationFrame(draw);
        }

    }
    draw();
}
run();