const keyboardElement = document.querySelector('.keyboard');
const key = keyboardElement.attachShadow({mode: 'open'});

function keyboard () {
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
    let words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','g','r','s','t','u','v','w','x','y','z'];

    words.forEach(generateButton);

    function generateButton(word) {
        const wordbtn = document.createElement('button');
        wordbtn.textContent = word;
        wrapper.appendChild(wordbtn);

        wordbtn.setAttribute("id", `key-${word}`);
        wordbtn.classList.add("keyburdtton");

        wordbtn.onclick = function(e) {
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