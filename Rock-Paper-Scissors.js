let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function gethand() {
    let randomIndex = Math.floor(Math.random()*3) //0,1,2
    return hands[randomIndex]
  
}
console.log(gethand() )
