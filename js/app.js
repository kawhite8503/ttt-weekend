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
  render()
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

  if (winner === null) {
    return (turn === 1 ? messageEl.textcontent = `Player ${turn}'s turn` : messageEl.textcontent = `Player ${turn}'s turn`)
  } else if (winner === 'T') {
    return messageEl.textcontent = "It's a tie!!"
  } else (winner !== null){
    return messageEl.textcontent = `Congratulations!! Player ${turn} won!!`
  }
}


function changeTurn(){
  turn = turn * -1
}


