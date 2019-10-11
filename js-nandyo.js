const wordList = ["mobil", "pesawat", "rumah", "hotel"];
const clueList = ["kendaraan", "kendaraan", "bangunan", "bangunan"];
const indexTerpilih = Math.floor(Math.random() * wordList.length);
const kata = wordList[indexTerpilih];

console.log(wordList[indexTerpilih]);
	
for(i=0;i<kata.length;i++){
//	var boxLetter = document.createElement("div");
	var box = document.createElement("div");
	
	//pembuatan boxbelakang
	document.getElementById("containerWord").appendChild(box);
	document.querySelectorAll("#containerWord>div")[i].classList.add("boxWord");
    document.querySelectorAll("#containerWord>div")[i].classList.add(btoa("salt"+kata[i]));
    document.querySelectorAll("#containerWord>div")[i].id = "underscore"+i;
    
    
	
	//pembuatan boxdepan
//	document.getElementById("containerDepan").appendChild(boxLetter);
//	document.querySelectorAll("#containerDepan>div")[i].classList.add("boxPerChar");
//    document.querySelectorAll("#containerDepan>div")[i].id = "letter"+i;
//	document.querySelectorAll("#containerDepan>div")[i].innerHTML = word[i];
	
	
	
}

exports.kata = kata;

//document.querySelectorAll("div")[2].classList.add("hideTheBox");


//console.log("val"+document.getElementById("underscore2").classList[1])