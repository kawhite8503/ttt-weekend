/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let board
let turn   //1 represents player X, -1 represents player O
let winner//if anyone has won yet, or if a tie has occurred

let winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector('#message')
const entireBoard = document.querySelector('.board')

// console.log(squareEls)
// console.log(messageEl)
/*----------------------------- Event Listeners -----------------------------*/
entireBoard.addEventListener('click', handleClick)


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


function handleClick(evt){
  console.log('Click works!')
}