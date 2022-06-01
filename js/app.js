/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let board
let turn   //1 represents player X, -1 represents player O
let winner//if anyone has won yet, or if a tie has occurred



/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector('#message')

// console.log(squareEls)
// console.log(messageEl)
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init ()

function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1 
  winner = null
  render()
  // console.log(board)
};

function render (){
  board.forEach(function(square, index){
    if(square === 1) {
      squareEls[index].textContent = 'X'
    } else if (square === -1) {
      squareEls[index].textContent = "O"
  }
});


  if (winner === null) {
    return (turn === 1 ? messageEl.textcontent = `Player ${turn}'s turn` : messageEl.textcontent = `Player ${turn}'s turn`)
  } else if (winner === 'T') {
    return messageEl.textcontent = "It's a tie!!"
  } else if (winner !== null){
    return messageEl.textcontent = `Congratulations!! Player ${turn} won!!`
  };
}


function changeTurn(){
  turn = turn * -1
}


