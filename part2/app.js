let baseURL = "https://deckofcardsapi.com/api/deck/new/draw/"
let count = 1

//1.
async function getCard(){
    let card = await $.getJSON(`${baseURL}`)
    console.log(`${card["cards"][0]["value"]} of ${card["cards"][0]["suit"].toLowerCase()}`)
}
getCard()

//.2
async function drawTwice(){
    let newDeck = await $.getJSON(`${baseURL}`)
    let drawAgain = await $.getJSON(`https://deckofcardsapi.com/api/deck/${newDeck["deck_id"]}/draw/`)
    console.log(`${newDeck["cards"][0]["value"]} of ${newDeck["cards"][0]["suit"].toLowerCase()}`)
    console.log(`${drawAgain["cards"][0]["value"]} of ${drawAgain["cards"][0]["suit"].toLowerCase()}`)
}
drawTwice()

let btn = document.querySelector("#button")
let deck_id = null
let imgArea = document.querySelector("#card-area")
//3.

async function newDeck(){
    let newDeck = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/`)
    deck_id = newDeck["deck_id"]

}
newDeck()
async function putToPage(){
    let card = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
    let img = document.createElement("img")
    img.src = card["cards"][0]["image"]
    imgArea.append(img)
}

btn.addEventListener("click", putToPage)

