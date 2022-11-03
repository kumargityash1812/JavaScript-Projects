const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closeBtn = document.getElementById("close");
const cart=document.getElementById("cart1");
const header = document.getElementById("header");
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



