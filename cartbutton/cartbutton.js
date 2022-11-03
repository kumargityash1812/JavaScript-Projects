let pbtn = document.querySelector('.pbtn');
let btn = document.querySelector('.btn');
let mbtn = document.querySelector('.mbtn');
let btn1 = document.querySelector('.btn1');
btn.addEventListener('click', function () {
    pbtn.style.display = 'inline-block';
    mbtn.style.display = 'inline-block';
    btn.innerHTML = '0';
}
);
btn1.addEventListener('click', function () {
    if (btn.innerHTML == 0) {
        alert('add items to cart?')
    }
    if (btn.innerHTML > 0) {
        confirm(`Do you want to add ${btn.innerHTML} items to the cart?`)
    }
}
);
pbtn.addEventListener('click', function () {
    if (btn.innerHTML < 5) {
        btn.innerHTML++;
    }
    if (btn.innerHTML == 5) {
        pbtn.style.display = 'none';
        alert('you can add maximum 5 items to the cart at this point of time...')
    }
    mbtn.style.display = 'inline-block';
});
mbtn.addEventListener('click', function () {
    if (btn.innerHTML > 0) {
        if (5 >= btn.innerHTML >= 1) {
            btn.innerHTML--;
        }
    }
    if (btn.innerHTML <=0) {
        mbtn.style.display = 'none';
    }
        pbtn.style.display = 'inline-block';
    
});

