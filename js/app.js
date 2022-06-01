/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let board
let turn   //1 represents player X, -1 represents player O
let winner//if anyone has won yet, or if a tie has occurred



/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelector('.square')
const messageEl = document.querySelector('#message')

console.log(squareEls)
console.log(messageEl)
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init ()

function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1 
  winner = null
}

function render (){
  board.forEach(square, idx){
    if(square === 1) {
      squareEls[idx].textcontent = 'X'
    } else if (square === -1) {
      squareEls[idx].textcontent = "O"
    } else {
      squareEls[idx].textcontent = ''
    }
  }

}

function changeTurn(){
  turn = turn * -1
}

function renderMessage (){
  if(winner === null) {
    return messageEl = `Now player ${turn}'s turn!`
  }
}

