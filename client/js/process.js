let word = null;
let words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','g','r','s','t','u','v','w','x','y','z'];
let indexWord = null;

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
        }
    }
    
    return word;
}