const wordList = ["mobil", "pesawat", "rumah", "hotel"];
const clueList = ["kendaraan", "kendaraan", "bangunan", "bangunan"];
const indexTerpilih = Math.floor(Math.random() * wordList.length);
const word = wordList[indexTerpilih];

console.log(wordList[indexTerpilih]);
	
for(i=0;i<word.length;i++){
//	var boxLetter = document.createElement("div");
	var box = document.createElement("div");
	
	//pembuatan boxbelakang
	document.getElementById("containerWord").appendChild(box);
	document.querySelectorAll("#containerWord>div")[i].classList.add("boxWord");
    document.querySelectorAll("#containerWord>div")[i].id = "underscore"+i;
	document.querySelectorAll("#containerWord>div")[i].innerHTML = "_";
	
	//pembuatan boxdepan
//	document.getElementById("containerDepan").appendChild(boxLetter);
//	document.querySelectorAll("#containerDepan>div")[i].classList.add("boxPerChar");
//    document.querySelectorAll("#containerDepan>div")[i].id = "letter"+i;
//	document.querySelectorAll("#containerDepan>div")[i].innerHTML = word[i];
	
	
	
}

//document.querySelectorAll("div")[2].classList.add("hideTheBox");

//word.forEach(function(value){
//    if(value == document.getElementsByClassName)
//});


console.log(document.getElementById("containerWord").attributes[1])

if(document.getElementById("containerWord").attributes[1] == "customattrlol=''"){
    console.log("wa");
}