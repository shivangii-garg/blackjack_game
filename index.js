let getRandomCard = () => {
    let randomNumber = (Math.floor(Math.random() * 13)) +1
    if(randomNumber == 1)
    return 11;
    else if(randomNumber == 11 || randomNumber == 12 || randomNumber == 13)
    return 10;
    else
    return randomNumber;
}


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl= document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el");

let player = {
    name:"Per",
    chips :145
}


let playerEL = document.querySelector("#player-el");
playerEL.innerHTML = player.name + ": $" + player.chips;


let startGame = () => {
     isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}
let renderGame = () => {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
   messageEl.innerHTML = message;
   sumEl.innerHTML = "Sum: " + sum;
   cardEl.innerHTML = "Cards: " + cards
}

let newCard = () => {
    if(isAlive == true && hasBlackJack == false){
    let card = getRandomCard();
    cards.push(card);
    sum = sum + card;
    renderGame();
}
}