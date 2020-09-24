let massage = document.querySelector('.input');
let out = document.querySelector('.out');

function f1(){
    
    var htmlCode = `<div id="block2"> <span id='per'>${massage.value}</span> <button id='delete' onclick='f2()'>Delete</button> </div>`;
    out.insertAdjacentHTML('afterBegin', htmlCode);
}   

function f2(){
    document.getElementById("block2").remove();
}