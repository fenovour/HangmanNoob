let dataDictionary = ''
let dataKeywords = ''
const wordList = ["mobil", "pesawat", "rumah", "hotel"];
let kata = null;
let keyword = null;
let word = null;
let words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'g', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let indexWord = null;
const keyboardElement = document.querySelector('.keyboard');
const key = keyboardElement.attachShadow({
    mode: 'open'
});
const label = document.querySelector('.conlabel');


window.onload = function () {
    this.getDictionary();
    this.getKeywords();
}

function getDictionary() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            string = this.responseText;
            dataDictionary = JSON.parse(this.responseText);

        }
    }
    xmlhttp.open("GET", "/dictionary", true);
    xmlhttp.send();
}

function getKeywords() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            string = this.responseText;
            dataKeywords = JSON.parse(this.responseText);

        }
    }
    xmlhttp.open("GET", "/keywords", true);
    xmlhttp.send();
}



function randomWords(arrWords, arrKeywords) {
    const indexTerpilih = Math.floor(Math.random() * arrWords.length);
    const data = arrWords[indexTerpilih];
    kata = arrWords[indexTerpilih];
    keyword = arrKeywords[indexTerpilih];
    label.textContent = keyword;
    console.log(arrWords.length);
    console.log(arrWords);
    console.log(data);
    console.log(keyword);
    const clueList = ["kendaraan", "kendaraan", "bangunan", "bangunan"];
    for (let i = 0; i < data.length; i++) {
        //	var boxLetter = document.createElement("div");
        var box = document.createElement("div");

        //pembuatan boxbelakang
        document.getElementById("containerWord")
            .appendChild(box);
        document.querySelectorAll("#containerWord>div")[i].classList.add("boxWord");
        document.querySelectorAll("#containerWord>div")[i].classList.add(btoa("salt" + data[i]));
        document.querySelectorAll("#containerWord>div")[i].id = "underscore" + i;

    }


}
setTimeout(() => {
    randomWords(dataDictionary, dataKeywords);
}, 1000)



function clickWord(key) {
    word = key;
    console.log(word);
    //indexWord = words.indexOf(key);
    //document.getElementById('key-' + word).disabled();
    for (i = 0; i < kata.length; i++) {
        if (document.getElementById("underscore" + i)
            .classList[1] == btoa("salt" + word)) {
            document.getElementById("underscore" + i)
                .innerHTML = word;
            document.getElementById("underscore" + i)
                .style.border = "none";
            document.getElementById("underscore" + i)
                .style.background = "transparent";
        }
    }

    return word;
}



function keyboard() {
    const wrapper = document.createElement('div')
    // wrapper.classList.add('key');
    const style = document.createElement("style");
    style.textContent = `
    .keyburdtton{
    width: 58px;
	height: 58px;
	background: rgba(197, 198, 200, 0.14);
    color: #c5c6c8;
	font-size: 44px;
    text-align: center;
    border-width: 1px;
    border-color: #202833;
    box-sizing: border-box;
    transition: background 0.5s, color 1s, width 0.5s, height 0.5s;
    }

    .keyburdtton:hover{
        width: 62px;
        height: 62px;
        cursor: pointer;
        background: rgba(197, 198, 200, 0.38);
        color: #66fcf1;
    }

    .keyburdttonClicked{
        width: 58px;
        height: 58px;
        background: rgba(197, 198, 200, 0.07) !important;
        color: rgba(197, 198, 200, 0.17);
        font-size: 44px;
        text-align: center;
        border-width: 1px;
        border-color: #202833;
        box-sizing: border-box;
    }
    `;
    key.appendChild(style);
    let words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'g', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    words.forEach(generateButton);

    function generateButton(word) {
        const wordbtn = document.createElement('button');
        wordbtn.textContent = word;
        wrapper.appendChild(wordbtn);

        wordbtn.setAttribute("id", `key-${word}`);
        wordbtn.classList.add("keyburdtton");

        wordbtn.onclick = function (e) {
            let letter = wordbtn.textContent
            wordbtn.disabled = true
            clickWord(wordbtn.textContent);

            wordbtn.classList.remove("keyburdtton");
            wordbtn.classList.add("keyburdttonClicked");
        }
    }
    key.appendChild(wrapper);
};

keyboard();




// exports.dataDictionary = parseData;
