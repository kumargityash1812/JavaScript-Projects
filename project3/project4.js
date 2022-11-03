
   const symbols="0123456789ABCDEF";
   
function getColor(){
    let  colour="#";
    for(let i=0;i<6;i++){
        colour=colour + symbols[Math.floor(Math.random()*16)]; 
    };
    year.style.color=colour;
}
let year=document.querySelector(".year");
year.addEventListener("mouseover",function(){
getColor();});
let date1=new Date();
let date2=date1.getFullYear();
let date3=date1.getDate();
let date4=date1.getHours();
let date5=date1.getMinutes();
let date6=date1.getSeconds();

if(date3<10){
    date3="0"+ date3;
}else{
      date3=date3;
}

 function  displaytime(){
    date6++;
    if(date6/60==1){
        date6=0;
        date5++;
    }
    if(date4<10){
        date4="0"+ date4;
    }else{
          date4=date4;
    }
    if(date5<10){
        date5="0"+ date5;
    }else{
          date5=date5;
    }
    if(date6<10){
        date6="0"+ date6;
    }else{
          date6=date6;
    }
    if(date5/60==1){
        date5=0;
        date4++;
    }
    
    let date="September "+ date3 +"," + date2 + " " + date4 +":" + date5 +":" + date6;
    let date7=document.querySelector("#date")
    date7.innerHTML=date;
   
 }
 let date="September "+ date3 +"," + date2 + " " + date4 +":" + date5 +":" + date6;
 let date7=document.querySelector("#date")
 date7.innerHTML=date;
 window.setInterval(displaytime,1000);
 date7.addEventListener('mouseover',function(){
    getbgColor();
 })
  const symbol="1234567890ABCDEF";
 function getbgColor(){
    let  bgcolour="#";
    for(let i=0;i<6;i++){
        bgcolour=bgcolour + symbol[Math.floor(Math.random()*16)]; 
    };
    date7.style.backgroundColor=bgcolour;
}window.setInterval(getColor,1000);
window.setInterval(getbgColor,1000);
let list=document.getElementById("li1");
list.style.backgroundColor="LawnGreen";
let list1=document.getElementById("li2");
list1.style.backgroundColor="Yellow";
let list2=document.querySelectorAll(".li3");
list2.forEach((list,i) => {
    list.style.backgroundColor="Crimson";
});





