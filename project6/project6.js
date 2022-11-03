let btn=document.querySelector(".para");
let para1=document.querySelector(".para1");
let key=document.querySelector(".key");
let para=document.querySelector(".demo");
function function1(event){
    var y=event.key;
    var x=event.charCode;
   para.style.display="block";
   btn.style.display="none";
   para.innerHTML=x;
    key.innerHTML=y;
   para1.style.display="block";


};