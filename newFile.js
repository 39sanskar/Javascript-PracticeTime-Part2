const { fightButton, fighters } = require("./EmogiFighter");

fightButton.addEventListener("click", function () {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomIndex = Math.floor(Math.random() * fighters.length);
    console.log(randomIndex);

});
