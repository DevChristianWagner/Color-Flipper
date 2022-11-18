let span = document.querySelector('span')
let button = document.querySelector('button')
let h1 = document.querySelector('h1')
let color = '';

function generateColor(length) {
    const characters ='ABCDEF0123456789';
    let randomLetter = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        randomLetter += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return randomLetter;
}

button.addEventListener('click',  () => {
    color = "#" + generateColor(6);
    
    document.body.style.background = color;
    span.innerText = color;
    span.style.color = color;
    h1.style.color = '#f1f5f8';
})


