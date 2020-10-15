function f1(){
    if(document.querySelector('.menu').classList.contains('active')){
        document.querySelector('.menu').classList.remove('active');
        document.querySelector('.mob').classList.remove('active__ul');
    }else {
        document.querySelector('.menu').classList.add('active');
        document.querySelector('.mob').classList.add('active__ul');
    }

    

    
};
