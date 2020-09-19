let canv = document.getElementById('canvas')
let ris = canv.getContext("2d")

let back = new Image();
let player = {a:300, b:300};
let playerImg = new Image();
let eat = new Image();

let playerWidth = 128;
let playerHeight = 128;

let a = 300;
let b = 200;

// let speed = prompt()

let score = 0;

// let speed = document.getElementById('speed').value;


let aRandom = Math.round(Math.random()*620);
let bRandom = Math.round(Math.random()*670);

// console.log(aRandom);
// console.log(bRandom);


back.src = "img/back.png";
playerImg.src = "img/player.png";
eat.src = "img/eat.png";


// function changeSpeed (num){
//     speed = document.getElementById('speed').value;
// }






function draw() {
    ris.drawImage(back,0,0);
    requestAnimationFrame(draw);
    ris.drawImage(playerImg,player.a,player.b);
    ris.drawImage(eat,aRandom,bRandom);


    document.onkeydown = function move (){
        if(event.key == "ArrowRight"){
            player.a+=20;
            if (player.a>540) {
                player.a = 540;
            }

        }

        if(event.key == "ArrowLeft") {
            player.a-=20;
            if (player.a<0) {
                player.a = 0;
            }
        }

        if(event.key == "ArrowDown"){
            player.b+=20;
            if (player.b>610) {
                player.b = 610;
            }
        }

        if(event.key == "ArrowUp"){
            player.b-=20;
            if (player.b<0) {
                player.b = 0;
            }
        }

    }
    if ( (bRandom > player.b && bRandom < player.b+playerHeight) && (aRandom > player.a && aRandom < player.a+playerWidth)){
        aRandom = Math.round(Math.random()*620);
        bRandom = Math.round(Math.random()*670);
        score=score+1;
        document.getElementById('score').innerHTML = score;
    }

    if(score >= 10) {
        document.getElementById('p1').disabled = false;
    }
    else if(score < 10) {
        document.getElementById('p1').disabled = true;
    }


    if(score >= 10) {
        document.getElementById('p2').disabled = false;
    }
    else if(score < 10) {
        document.getElementById('p2').disabled = true;
    }

    

}



 draw();

function p1(num) {
  playerImg.src = 'img/player' + num + '.png';
}

function p2(num) {
    eat.src = 'img/eat' + num + '.png';
}

function start() { p1(0); p2(0); draw() }
start();













// https://bogdanchikov-ilya.github.io./stream/index.html


// а еще можешь попробовать создать тертье свойство где будет храниться img, тип player.img, ну все побежал


//Нужно чтобы кордината X еды была больше координаты X игрока, но меньше (X игрока+ширина игрока

//SuhEugene

// если кнопка cheat mod нажата, то  
//document.getElementById('ALL').disabled = false;