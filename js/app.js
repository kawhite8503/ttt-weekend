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
const resetBtn = document.querySelector('#reset-button')
console.log()
// console.log(squareEls)
// console.log(messageEl)
/*----------------------------- Event Listeners -----------------------------*/
entireBoard.addEventListener('click', handleClick)
resetBtn.addEventListener('click', init)



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
    } else if (square === null) {
      squareEls[index].textContent = ''
    }
});


const playerTurn = turn === 1 ? "Player 1" : "Player 2"
if (winner === null) {
  messageEl.textContent = playerTurn + "'s turn!"
} else  if (winner === 'T'){
  return messageEl.textContent = "Cat's game! Try again!"
} else {
  const playerWin = turn === 1 ? "Player 2" : "Player 1"
  return messageEl.textContent = `Congratulations ${playerWin}! You are the winner!!`
};
}



function handleClick(evt){
  const sqIdx = parseInt(evt.target.id.slice(2))
  // console.log(sqIdx)
  
  if (board[sqIdx] !== null) {
    return
  }
  if (winner !==null) {
    return
  }
  board.splice(sqIdx, 1, turn)
  turn = turn * -1

  getWinner()
  render()
}


// let winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

function getWinner(){
  winningCombos.forEach(function(combo){
    // console.log(combo)
    if (board[combo[0]] + board[combo[1]] + board[combo[2]] === 3){
      winner = 1
      // console.log('winner is X')
    }
    if (board[combo[0]] + board[combo[1]] + board[combo[2]] === -3){
      winner = -1
      // console.log('winner is O')
    }
    
    if (!board.includes(null)){
      winner = 'T'
    }

  })
}

// if(total === 3){
//   winner === 1
// } else if (total === -3){
//   winner === -1
// }
// board.forEach(function(index){
//   if (index !== null) {
//     winner === 'T'
//   }
// })