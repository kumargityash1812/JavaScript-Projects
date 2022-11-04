const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closeBtn = document.getElementById("close");
const cart=document.getElementById("cart1");
const header = document.getElementById("header");
  let mainImg=document.querySelector("#mainImg");
        let smallImg=document.getElementsByClassName("small-img");
        smallImg[0].addEventListener("click",()=>{
            mainImg.src=smallImg[0].src;
        });
        smallImg[1].addEventListener("click", () => {
                mainImg.src = smallImg[1].src;
            });
            smallImg[2].addEventListener("click", () => {
                    mainImg.src = smallImg[2].src;
                });
                smallImg[3].addEventListener("click", () => {
                        mainImg.src = smallImg[3].src;
                    });
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        nav.classList.remove("active");
    }) 
}
if (cart) {
    cart.addEventListener("click", () => {
        cart.style.color = "088178";
    })
}



