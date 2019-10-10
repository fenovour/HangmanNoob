const keyboardElement = document.querySelector('.keyboard');
const key = keyboardElement.attachShadow({mode: 'open'});

function keyboard () {
    const wrapper = document.createElement('div')
    // wrapper.classList.add('key');

    let words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','g','r','s','t','u','v','w','x','y','z'];

    words.forEach(generateButton);

    function generateButton(word) {
        const wordbtn = document.createElement('button');
        wordbtn.textContent = word;
        wrapper.appendChild(wordbtn);

        wordbtn.setAttribute("id", `key-${word}`);

        wordbtn.onclick = function(e) {
            let letter = wordbtn.textContent
            wordbtn.disabled = true
            clickWord(wordbtn.textContent);
        }
    }
    key.appendChild(wrapper);
};

keyboard();