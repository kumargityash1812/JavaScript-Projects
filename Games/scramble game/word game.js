let wordText = document.querySelector(".word");
let hintText = document.querySelector(".hint span");
let refreshBtn = document.querySelector(".refresh-word");
let checkBtn = document.querySelector(".check-word");
let inputField = document.querySelector("input");
let timeText = document.querySelector(".time b");
let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time out! ${userWord.toLocaleUpperCase()} was the correct word`);
        initGame();
    }, 1000);

}


const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (i = words.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerHTML = wordArray.join("");
    hintText.innerHTML = randomObj.hint;
    correctWord = randomObj.word.toLocaleLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();
const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if (!userWord) return alert("please enter a word to check");
    if (userWord !== correctWord) return alert(`oops ${userWord} is not a correct word.`);

 alert(`congrats ${userWord.toLocaleUpperCase()} is a correct word`);
    initGame();
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

