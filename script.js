const textbox = document.querySelector('.textbox');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => showResult());

function showResult() {
    const word = textbox.value;
    const eachLetter = word.split('');
    const x = eachLetter.toString();
    console.log(x);
    const y = eachLetter.reverse().toString();
    console.log(y);
    if(x === y) {
        return alert('It is a palindrome!');
    } else {
        return alert('It is not a palindrome, :(');
    }
}

