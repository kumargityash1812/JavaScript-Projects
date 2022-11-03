//variables
let button=document.querySelector(".button");
let textcontainer=document.querySelector(".text-container");
let closebtn=document.querySelector(".close-btn");

button.addEventListener('click',function(){
    textcontainer.style.display='block';
});
closebtn.addEventListener('click',function(){
    textcontainer.style.display='none';
});
