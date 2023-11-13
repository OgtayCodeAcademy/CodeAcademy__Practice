let uppercaseRegex = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercaseRegex = 'abcdefghijklmnopqrstuvwxyz';
let numbersRegex = '1234567890';
let specificSymbolsRegex = '!@#$%^&()_+~`|}{[]:;?><,./-=';

let upperCaseArray = uppercaseRegex.split("");
let lowerCaseArray = lowercaseRegex.split("");
let numbersArray = numbersRegex.split("");
let symbolsArray = specificSymbolsRegex.split("");


let result = document.querySelector("#result");
let password_length = document.querySelector(".length-input")
let generate_button = document.querySelector("button")
let upperCaseCheck = document.querySelector("#uppercase")
let lowerCaseCheck = document.querySelector("#lowercase")
let numbersCheck = document.querySelector("#numbers")
let symbolsCheck = document.querySelector("#symbols")


let array = []
generate_button.addEventListener('click', function (){
    result.value = ``
    let password = ``
    let uppercasechecked = false;
    while ( password.length < password_length.value) {
        if (upperCaseCheck.checked && !uppercasechecked) {
            array = [...upperCaseArray]
            let random_number = Math.floor(Math.random() * (array.length - 1))
            // console.log(random_number);
            password += array[random_number]
        }
        if(lowerCaseCheck.checked){
            array = [...lowerCaseArray]
            let random_number = Math.floor(Math.random() * (array.length - 1))
            password += array[random_number]
        }
        if(numbersCheck.checked){
            array = [...numbersArray]
            let random_number = Math.floor(Math.random() * (array.length - 1))
            password += array[random_number]
        }
        if(symbolsCheck.checked){
            array = [...symbolsArray]
            let random_number = Math.floor(Math.random() * (array.length - 1))
            password += array[random_number]
        }
        console.log(password);
    }
    result.value = password
})


