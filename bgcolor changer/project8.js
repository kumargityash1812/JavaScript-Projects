let color=document.querySelector("#color");
function getColor(){
    let symbols="0123456789ABCDEF";
let colour="#";
 for(let i=0;i<6;i++){
    colour=colour+symbols[Math.floor(Math.random()*16)];
 }
 color.innerHTML=colour;
 documnet.body.style.backgroundColor=colour;
};