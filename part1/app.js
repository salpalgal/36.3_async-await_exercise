let number = 3 
let baseURL = "http://numbersapi.com/"

//1. 
async function getFact(){
    let fact = await $.getJSON(`${baseURL}${number}?json`)
    console.log(fact)
}
getFact()
let numbers =[3,6,7]
let section = document.querySelector("#section")

//2. 
async function multiNumFacts(){
    let facts = await $.getJSON(`${baseURL}${numbers}?json`)
    for(let f in facts){
        let p = document.createElement("p")
        p.innerText = facts[f]
        section.append(p)
    }
}
multiNumFacts()

//3. 
async function fourFacts(){
    let facts = await Promise.all([
        $.getJSON(`${baseURL}${number}?json`),
        $.getJSON(`${baseURL}${number}?json`),
        $.getJSON(`${baseURL}${number}?json`),
        $.getJSON(`${baseURL}${number}?json`)
    ])
    for(let f in facts){
        let p = document.createElement("p")
        p.innerText = facts[f]["text"]
        section.append(p)  
    }
}
fourFacts()