let email = document.querySelector('.email');
let emailInput = email.querySelector('input');
let password = document.querySelector('.password');
let passwordInput = password.querySelector('input');
let text = document.querySelector('#para');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', function () {
    if ((emailInput.value != 'kumaryash539@gmail.com') && (passwordInput.value == 'yashgarg1812')) {
        text.style.color = 'red';
        text.innerHTML = 'Username is not correct.Try Again...';
    }
    else if (( passwordInput.value != 'yashgarg1812') && (emailInput.value=='kumaryash539@gmail.com')) {
        text.style.color = "red";
        text.innerHTML = "Password is not correct.Try again...";
    }

    else if ((emailInput.value== 'kumaryash539@gmail.com') && (passwordInput.value == 'yashgarg1812')) {
        btn1.style.display = 'none';
        btn2.style.display = 'inline-block';
        text.style.display = 'none';
    }
});

