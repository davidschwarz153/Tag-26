const john = 22*5+170
const meike = 34*5+168
console.log(`john score: ${john}`);
console.log(`meike score: ${meike}`);
if (john <= meike) {
    console.log(`Meike gewinnt das Spiel mit ${meike} Punkten`);
} else if (john >= meike){
    console.log(`John gewinnt das Spiel mit ${meike} Punkten`);
} else{
    console.log("draw");
}

//
const diffNum = 74
const diff = diffNum - 27
if (diff >= 27) {
    console.log(diffNum - 27 * 2);
} else {
    console.log(diffNum - 27);
}

//
const btnClick = document.getElementById("btn-sub")
btnClick?.addEventListener('click', passwordSafty)
function passwordSafty(){
    const passwordInput = (document.getElementById("password") as HTMLInputElement).value
    const passwordLength = passwordInput.length
    const messageOutput = document.getElementById("message") as HTMLDivElement
    if (passwordLength >= 8) {
        messageOutput.innerText = "Das Passwort wurde erfolgreich gespeichert."
    } else {
        messageOutput.innerText = "Das Passwort ist zu kurz. Bitte verwende mindestens 8 Zeichen."
    }
}

//
const isOnline = true
const isPremiumUser = true
const isAdult = true

const isOnlineStatus = isOnline ? console.log("online") : console.log("offline")
let monthyFee
const isPremiumStatus = isPremiumUser ?  monthyFee = 19.99 : monthyFee = 12.99
const isAdultStatus = isAdult ? console.log("Willkommen") : window.alert("Keine Berechtigung")

const randomAge = 69
const randomSalary = 1337

let isMiddleAged
const ageChecker = randomAge <= 40 && randomAge >= 60 ? isMiddleAged = true : isMiddleAged = false
console.log(isMiddleAged);
const salaryChecker = randomSalary >= 10000 ? console.log("You are rich") : (randomSalary> 1500 ? console.log("Not to bad") : console.log("Not that much"))    

//
    const zahl1 = Math.floor(Math.random() * 77);
    const zahl2 = Math.floor(Math.random() * 77);
    console.log(`Zahl 1: ${zahl1}, Zahl 2: ${zahl2}`);
    if (zahl1 === zahl2) {
        console.log('Was für ein Zufall');
    } else if (zahl1 > zahl2) {
        console.log('Erste Zahl größer');
    } else {
        console.log('Zweite Zahl größer');
    }

    const zahl1 = Math.floor(Math.random() * 77);
    const zahl2 = Math.floor(Math.random() * 77);
    console.log(`Zahl 1: ${zahl1}, Zahl 2: ${zahl2}`);

    switch (true) {
        case zahl1 === zahl2:
            console.log('Was für ein Zufall');
        break;
        case zahl1 > zahl2:
            console.log('Erste Zahl größer');
        break;
        case zahl1 < zahl2:
            console.log('Zweite Zahl größer');
        break;
}

