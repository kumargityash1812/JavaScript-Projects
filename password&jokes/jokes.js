let header = document.querySelector('.h1');
header.addEventListener("mouseover", function(){
    getColor();
});
 let symbol = '0123456789ABCDEF';

let i,index;
function getColor() {
    let colour = '#';
    for (i = 0; i < 6; i++){
        index = symbol[Math.floor(Math.random() * 16)];
        colour = colour + index;
    }
    header.style.color = colour;
} window.setInterval(getColor, 1000);



let jokes = document.querySelector('#joke');
let button = document.querySelector('.button');
const jokeData = [{
    joke: 'What creature is smarter than a talking parrot? A spelling bee.'
},
{ joke: 'Which U.S.state has the smallest soft drinks? Minnesota(as in, “mini- soda”).' },
{ joke: 'Why couldn’t the leopard play hide and seek? Because he was always spotted.' },
{ joke: 'Apparently, you can’t use “beef stew” as a password. It’s not stroganoff.' },
{ joke: 'Why did the drum take a nap? It was beat.' },
{ joke: 'Where do hamburgers go dancing?  They go to the meat-ball.' },
{ joke: 'Why did the tomato turn red?  It saw the salad dressing.' },
{ joke: 'Why shouldn’t you write with a broken pencil? Because it’s pointless.' },
{ joke: 'What do you call two monkeys that share an Amazon account? Prime mates.' },
{ joke: 'Why are teddy bears never hungry? Because they’re always stuffed!' },
{ joke: 'Why did the tree go to the dentist? It needed a root canal.' },
{ joke: 'If athletes get athlete’s foot, what do elves get? Mistle-toes.' },
{ joke: 'Why couldn’t the pony sing? Because she was a little hoarse.' },
{ joke: 'Where do cows go for entertainment? The mooooo-vies!' },
{ joke: 'What do you call a pig that does karate? A pork chop.' },
{ joke: 'How does NASA organize a party? They planet.' },
{ joke: 'Why did Adele cross the road ? To sing, “Hello from the other side!' },
{ joke: 'What runs around a yard without actually moving ? A fence.' },
    , { joke: 'What’s an astronaut’s favorite candy ? A Mars bar.' },
{ joke: 'Where do sheep go to get their hair cut ? The baa - baa shop.' },
{ joke: 'Why are there gates around cemeteries ? Because people are dying to get in.' },
{ joke: 'What do you get when you cross a snake with a pie ? A pie - thon!' },
{ joke: 'Why is Peter Pan always flying ? He Neverlands.' },
{
    joke: 'What’s the most musical part of the chicken? The drumstick.'
    }];
button.addEventListener('click', function(){
    let index = Math.floor(Math.random() * jokeData.length);
    jokes.innerText = jokeData[index].joke;
    value1.innerText = 0;
    value2.innerText = 0;
    input.style.display = 'none';
});
let heart = document.querySelector('#icon1');
let value1 = document.querySelector('.value1');
heart.addEventListener('click', function () {
    heart.style.color = 'darkred';
    heart.style.textShadow=
    alert('Thanks for liking the Joke.')
    value1.innerText++;
}
)
let comment = document.querySelector('#icon2');
let value2 = document.querySelector('.value2');
let input = document.querySelector('.input');
comment.addEventListener('click', function () {
    comment.style.color = 'darkblue';
    confirm('Do you want to add a comment');
    input.style.display = 'block';
    value2.innerText++;
    
}
);
let share = document.querySelector('#icon3');
share.addEventListener('click', function () {
    share.style.color = 'darkblue';
    confirm('Do you want to share on FaceBook..?');
});
let twitter = document.querySelector('#icon4');
twitter.addEventListener('click', function () {
    twitter.style.color = 'blue';
  confirm('Do you want to share on Twitter..?');
});