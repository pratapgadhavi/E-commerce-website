
// Header Section

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

// Single-page

const mainImg = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}