// const { kata } = require('./js-nandyo');

let word = null;
let words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','g','r','s','t','u','v','w','x','y','z'];
let indexWord = null;
let lives = 5;

function clickWord(key) {
    word = key;
    console.log(word);
    //indexWord = words.indexOf(key);
    //document.getElementById('key-' + word).disabled();
    for(i=0;i<kata.length;i++){
        if(document.getElementById("underscore"+i).classList[1] == btoa("salt"+word)){
            document.getElementById("underscore"+i).innerHTML = word;
            document.getElementById("underscore"+i).style.border = "none";
            document.getElementById("underscore"+i).style.background = "transparent";
            //alert("benarrrrrrrr");
        }
        else{
            //alert("salaaahh");
        }
    }
    chars = kata.split('');
    if (chars.includes(word) == false) {
        lives = lives - 1;
        if (lives == 0) {
            alert('GAME OVER')
            lives = 5
        }
    }
    alert(lives);
    return lives;
}