const arrayWords = [
    'febry', 'hasan', 'nandyo', 'satria'
]

const box = document.querySelector(".box");
let arr = [];
let randomWord = '';

function randomWords(data) {

    let rand = Math.random();

    let wordLength = data.length;

    let randIndex = Math.floor(rand * wordLength);
    let tempIndex = randIndex;



    for (let index = 0; index < wordLength; index++) {}
    randWord = data[randIndex];

    let split = randWord.split('');
    split.forEach((element, index) => {
        const div = document.createElement('div');
        div.classList.add("word-" + index)
        box.appendChild(div);
        let boxWord = document.querySelector('.word-' + index);
        boxWord.style.visibility = 'hidden';
        arr.push(boxWord);
        boxWord.textContent = element;
    });

    console.log(arr);


}


randomWords(arrayWords);
const btn = document.getElementById('btnHuruf');

function visibleWord() {

}

btn.addEventListener('click', (ev) => {
    arr[0].style.visibility = 'visible';
    console.log(ev);
})