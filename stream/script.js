let canv = document.getElementById('canvas')
let ris = canv.getContext("2d")

let back = new Image();
let player = {a:300, b:300};
let playerImg = new Image();
let eat = new Image();

let playerWidth = 128;
let playerHeight = 128;
let eatWidth = 47;
let eatHei = 47;


let a = 300;
let b = 200;

// let speed = prompt()

let score = 0;

let speed = document.getElementById('speed').value;

function nullSpeed () {
    if(speed == 0){
        speed=20;
    }
}
nullSpeed();


let aRandom = Math.round(Math.random()*620);
let bRandom = Math.round(Math.random()*670);




back.src = "img/back.png";
playerImg.src = "img/player.png";
eat.src = "img/eat.png";


function changeSpeed (num){
    speed = Number(document.getElementById('speed').value);
}






function draw() {
    ris.drawImage(back,0,0);
    requestAnimationFrame(draw);
    ris.drawImage(playerImg,player.a,player.b);
    ris.drawImage(eat,aRandom,bRandom);


    document.onkeydown = function move (){
        if(event.key == "ArrowRight"){
            player.a+=speed;
            if (player.a>535) {
                player.a = 535;
            }
            

        }

        if(event.key == "ArrowLeft") {
            player.a-=speed;
            if (player.a<0) {
                player.a = 0;
            }
            
        }

        if(event.key == "ArrowDown"){
            player.b+=speed;
            if (player.b>590) {
                player.b = 590;
            }
        }

        if(event.key == "ArrowUp"){
            player.b-=speed;
            if (player.b<0) {
                player.b = 0;
            }
        }

    }
    if ( (bRandom + 40 > player.b && bRandom < player.b+playerHeight) && (aRandom + 30> player.a && aRandom + 30 < player.a+playerWidth)){
        aRandom = Math.round(Math.random()*620);
        bRandom = Math.round(Math.random()*670);
        score=score+1;
        qwerty();
        
        document.getElementById('score').innerHTML = score;
    }

    function qwerty(){
        //********************************1 lvl**************************************** */
    if(score >= 10) {
        document.getElementById('p1').disabled = false;
        document.getElementById('e2').disabled = false;
        document.getElementById('info').innerHTML = 'Вы достигли 2-го уровня, открыт новый скин';
        
    }
    else if(score < 10) {
        document.getElementById('p1').disabled = true;
        document.getElementById('e2').disabled = true;
    }


    
//***********************************2 lvl************************************* */
    if(score >= 20) {
        document.getElementById('p3').disabled = false;
        document.getElementById('e3').disabled = false;
        document.getElementById('info').innerHTML = 'Вы достигли 3-го уровня, открыт новый скин';
        
    }
    else if(score < 20) {
        document.getElementById('p3').disabled = true;
        document.getElementById('e3').disabled = true;
    }

    
//***********************************3 lvl************************************* */
    if(score >= 30) {
        document.getElementById('p4').disabled = false;
        document.getElementById('e4').disabled = false;
        document.getElementById('info').innerHTML = 'Вы достигли 4-го уровня, открыт новый скин';
    }
    else if(score < 30) {
        document.getElementById('p4').disabled = true;
        document.getElementById('e4').disabled = true;
    }

   

//***********************************4 lvl************************************* */
    if(score >= 40) {
        document.getElementById('p5').disabled = false;
        document.getElementById('e5').disabled = false;
        document.getElementById('info').innerHTML = 'Вы достигли 5-го уровня, открыт новый скин';
    }
    else if(score < 40) {
        document.getElementById('p5').disabled = true;
        document.getElementById('e5').disabled = true;
    }

   

//***********************************5 lvl************************************* */
if(score >= 50) {
        document.getElementById('p6').disabled = false;
        document.getElementById('e6').disabled = false;
        document.getElementById('info').innerHTML = 'Вы достигли 6-го уровня, открыт новый скин';
    }
    else if(score < 50) {
        document.getElementById('p6').disabled = true;
        document.getElementById('e6').disabled = true;
    }

    
    }

    if (score == 0){
        document.getElementById('p1').disabled = true;
        document.getElementById('p3').disabled = true;
        document.getElementById('p4').disabled = true;
        document.getElementById('p5').disabled = true;
        document.getElementById('p6').disabled = true;

        document.getElementById('e2').disabled = true;
        document.getElementById('e3').disabled = true;
        document.getElementById('e4').disabled = true;
        document.getElementById('e5').disabled = true;
        document.getElementById('e6').disabled = true;

    }
    


    
    
}



function info () {
    alert("Открыт новый скин")
}

 draw();

function p1(num) {
  playerImg.src = 'img/player' + num + '.png';
}

function p2(num) {
    eat.src = 'img/eat' + num + '.png';
}

function cheat(){
    score = 99999;
    document.querySelector('#info').innerHTML = 'Теперь вы читер';
    document.getElementById('score').innerHTML = score;
    document.getElementById('p1').disabled = false;
    document.getElementById('p3').disabled = false;
    document.getElementById('p4').disabled = false;
    document.getElementById('p5').disabled = false;
    document.getElementById('p6').disabled = false;
    document.getElementById('e2').disabled = false;
    document.getElementById('e3').disabled = false;
    document.getElementById('e4').disabled = false;
    document.getElementById('e5').disabled = false;
    document.getElementById('e6').disabled = false;
}


function start() { p1(0); p2(0); draw() }
start();












// https://bogdanchikov-ilya.github.io./stream/index.html


// а еще можешь попробовать создать тертье свойство где будет храниться img, тип player.img, ну все побежал


//Нужно чтобы кордината X еды была больше координаты X игрока, но меньше (X игрока+ширина игрока

//SuhEugene

// если кнопка cheat mod нажата, то  
//document.getElementById('ALL').disabled = false;

//я кста в начале проектов обычно создаю функцию с коротким названием и там возвращаю то, что нашел квери селектор, напримар function F( find ) { return document.querySelector( find ) }
// вместо этого просто F('#p1').disabled = false