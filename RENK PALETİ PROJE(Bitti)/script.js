"use strict";

let rseçi = document.querySelector(".renkSeçici");

rseçi.addEventListener("click",renkSeç);
function renkSeç(){
    document.querySelector(".yazılar").classList.add("hide");
    document.querySelector(".renkSeçiciAlan").classList.remove("hide");
};


let rro = document.querySelector(".rastgeleRenk");

rro.addEventListener("click",renkEkran);
function renkEkran(){
document.querySelector(".yazılar").classList.remove("hide");
document.querySelector(".renkSeçiciAlan").classList.add("hide");
};

 
function renkYaz(){
    let renkyazı = document.querySelector("#renkPalet").value;
    document.querySelector("main").style.backgroundColor = renkyazı;
    document.querySelector(".hexyazı").textContent = (`HEX : ${renkyazı}`);
    }


document.querySelector(".classclickme").addEventListener("click",Tıkla);
function Tıkla(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let bgColor = "RGB("+ r +    ","   + g +   ","  + b + ")";
    console.log(bgColor);
    document.querySelector("main").style.backgroundColor = bgColor;
    document.querySelector(".bgtext").textContent = bgColor;

}
