let cards = [

    {
        value: 2,
        file: "images/2_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 2,
        file: "images/2_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 2,
        file: "images/2_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 2,
        file: "images/2_of_spades.png",
        aceOrNot: false

    },
    {
        value: 3,
         file: "images/3_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 3,
         file: "images/3_of_diamonds.png",
        aceOrNot: false
    },
    {
        value: 3,
         file: "images/3_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 3,
         file: "images/3_of_spades.png",
        aceOrNot: false

    },
    {
        value: 4,
         file: "images/4_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 4,
         file: "images/4_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 4,
         file: "images/4_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 4,
         file: "images/4_of_spades.png",
        aceOrNot: false

    },
    {
        value: 5,
        file: "images/5_of_spades.png",
        aceOrNot: false

    },
    {
        value: 5,
         file: "images/5_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 5,
         file: "images/5_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 5,
         file: "images/5_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 6,
         file: "images/6_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 6,
         file: "images/6_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 6,
         file: "images/6_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 6,
         file: "images/6_of_spades.png",
        aceOrNot: false

    },
    {
        value: 7,
         file: "images/7_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 7,
         file: "images/7_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 7,
         file: "images/7_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 7,
         file: "images/7_of_spades.png",
        aceOrNot: false

    },
    {
        value: 8,
         file: "images/8_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 8,
         file: "images/8_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 8,
         file: "images/8_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 8,
         file: "images/8_of_spades.png",
        aceOrNot: false
 
    },
    {
        value: 9,
         file: "images/9_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 9,
         file: "images/9_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 9,
         file: "images/9_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 9,
         file: "images/9_of_spades.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/10_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/10_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/10_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/10_of_spades.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/jack_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/jack_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/jack_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/jack_of_spades.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/king_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/king_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/king_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/king_of_spades.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/queen_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/queen_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/queen_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/queen_of_spades.png",
        aceOrNot: false

    },
    {
        value: 11,
        file: "images/ace_of_clubs.png",
        aceOrNot: true

    },
    {
        value: 11,
        file: "images/ace_of_hearts.png",
        aceOrNot: true

    },
    {
        value: 11,
        file: "images/ace_of_diamonds.png",
        aceOrNot: true

    },
    {
        value: 11,
        file: "images/ace_of_spades.png",
        aceOrNot: true

    }
]

let gameover = false;

// while(gameover === false){ //start of while loop

// Function to shuffle cards
function shuffle(cards){
    let shuffled = [];

    for(let i = 0; i <= 51; i++){

        let card = cards.splice(Math.floor(Math.random() * (52-i)), 1);
        shuffled.push(card[0]);
    }

    return shuffled;
    
    
}

let shuffled = shuffle(cards);

//? code to add cards to hand

let dealerHand = document.querySelector('#dealer-hand');
let playerHand = document.querySelector('#player-hand');
let playerScore = 0;
let dealerScore = 0;
let dScore = document.querySelector('#dealer-points');
let pScore = document.querySelector('#player-points');
let dealerArr = [];
let playerArr = [];
let dealAceDeduct = false;
let playAceDeduct = false;
let dealAceCount = 0;
let playAceCount = 0;

let dealPlayer = function(shuffled){

    let cardObj = shuffled[shuffled.length-1];

    let newCard = document.createElement('img');
    newCard.setAttribute('class', 'card');
    newCard.setAttribute('src', cardObj.file);
    newCard.setAttribute('data-value', cardObj.value );
    newCard.setAttribute('data-ace', cardObj.aceOrNot);
    playerHand.append(newCard);
    playerArr.push(cardObj);
    shuffled.pop();
    
    if(cardObj.aceOrNot === true){//incase they already got an ace and counted it as 1
        playAceDeduct = false;
    }

    if(hasAce(playerArr) && playAceDeduct === false){
        if(playerScore + cardObj.value > 21){
            playerScore -= 10;
            playAceDeduct = true;
            playAceCount += 1;
        } else{
            playAceCount += 1;
        }
    }
    if(playAceCount === 2 && playerScore + cardObj.value > 21){
        playerScore -= 10;
    }
    
    playerScore += cardObj.value;
    pScore.innerText = playerScore;

    if(playerScore > 21){
        message.innerText = "You busted! You lose."
    } else if(playerScore === 21){
        message.innerText = "You got 21! You win!"
    }


}

let hasAce = function(arr){

    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i].aceOrNot === true){

            return true;
            
        }
    }
}

let dealDealer = (shuffled)=>{

    let cardObj = shuffled[shuffled.length-1];

    let newCard = document.createElement('img');
    newCard.setAttribute('class', 'card');
    newCard.setAttribute('src', cardObj.file);
    newCard.setAttribute('data-value', cardObj.value );
    newCard.setAttribute('data-ace', cardObj.aceOrNot);
    dealerHand.append(newCard);
    dealerArr.push(cardObj);
    shuffled.pop();

    if(cardObj.aceOrNot === true){
        dealAceDeduct = false;
    }

    if(hasAce(dealerArr) && dealAceDeduct === false){
        if(dealerScore + cardObj.value > 21){
            dealerScore -= 10;
            dealAceDeduct = true;
            dealAceCount += 1;
        } else{
            dealAceCount += 1;
        }
    }
    if(dealAceCount >= 2 && dealerScore + cardObj.value > 21){
        dealerScore -= 10;
    }
    dealerScore += cardObj.value;
    dScore.innerText = dealerScore;

    if(dealerScore > 21){
        message.innerText = "Dealer busted! You win!"
    } else if (dealerScore === 21){
        message.innerText = "Dealer got 21. Dealer wins."
    }

}

let firstDeal = function(){

    dealPlayer(shuffled);
    dealDealer(shuffled);
    dealPlayer(shuffled);
    dealDealer(shuffled);

}

let dealBtn = document.querySelector('#deal-button')
dealBtn.addEventListener('click', (e) =>{

    firstDeal();

    document.querySelector('#deal-button').disabled = true;

})

let hitMeBtn = document.querySelector('#hit-button');

hitMeBtn.addEventListener('click', (e)=>{

    if(dealerScore >= 17){
        dealPlayer(shuffled);
    } else {
        dealPlayer(shuffled);
    dealDealer(shuffled);

    }
})

let stand = document.querySelector('#stand-button');

let standEL = stand.addEventListener('click', (e)=> {

    if(dealerScore <= 17 && dealerScore > playerScore){
        message.innerText = "You lose."
    } else if(dealerScore >= 17 && dealerScore < playerScore){
        dealDealer(shuffled);
    } else if (dealerScore <= 17 && dealerScore <playerScore){
        dealDealer(shuffled);
    }
    else if(dealerScore === playerScore){
        message.innerText = "You tied."
    } else{
        message.innerText = "You lose."
    }
    

})

let message = document.querySelector('#messages')

let reset = function(){

}










// } //end of while loop
