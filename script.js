let myBtn = document.getElementById('myBtn')
let img = document.getElementById('myImg')
let myDice = document.getElementById('myDice')
myBtn.onclick = function click(){
    let rollDice = Math.floor(Math.random()*6 ) + 1
    img.src = `dice_img/inverted-dice-${rollDice}.png`
    myDice.textContent = rollDice
}