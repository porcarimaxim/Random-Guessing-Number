let number = document.querySelector('#number')
let submit = document.querySelector('#submit')
let guessesResult = document.querySelector('#guesses')
let result = document.querySelector('#result')
let hint = document.querySelector('#hint')
let restart = document.querySelector('#restart')
 
let guessesCount = 0;
let maxGueses = 10;

let generateRandomNr = () => {
    return Math.ceil(Math.random() * 100)
}

let randomNumber = generateRandomNr();

number.value = '';
let checkGuess = () => {
    console.log('submit clicked')
    // comparam valoare din input cu numarul random
    // daca valoare din input === numarul random, afisam mesajul de felicitare, disable la input, buton si afisam butonul de restartgame
    // daca valoare e mai mica afisam textul wrong, crestem numarul de incercari, afisam valorile precedente, daca numarul de incercari == 10 mesaj de eroare
    // daca valoare e mai mare afisam textul wrong,crestem numarul de incercari, afisam valorile precedente, daca numarul de incercari == 10 mesaj de eroare

    if( randomNumber === Number(number.value)  ) {
        result.innerHTML = 'Felicitari!!!';
        submit.disabled = true;
        number.disabled = true;
        restart.style.display = 'inline-block'  
        hint.style.display = 'none'
    } 
    else {
        result.innerHTML = "Gresit!!!"
        guessesResult.innerHTML = guessesResult.innerHTML + " "+  number.value 
        guessesCount++;
        hint.style.display = 'block'
        guessesResult.style.display = 'block'
        result.style.display = 'block'
        
        if( randomNumber > Number(number.value) ) {
            hint.innerHTML = "numarul e prea mic!"
        }
        else {
            hint.innerHTML = "numarul e prea mare!"
        }

        if( guessesCount === maxGueses ) {
            submit.disabled = true;
            number.disabled = true;
            hint.style.display = 'none'
            result.innerHTML = "Game Over!";
            restart.style.display = 'inline-block';
        }
    }

    number.value = '';
    number.focus()
}

var restartGame = () => {
    submit.disabled = false;
    number.disabled = false;

    hint.style.display = 'none'
    guessesResult.style.display = 'none'
    result.style.display = 'none'

    randomNumber = generateRandomNr();
    restart.style.display = 'none';
}

submit.addEventListener('click', checkGuess);

restart.addEventListener('click', restartGame)