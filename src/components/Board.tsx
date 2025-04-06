import { useState } from 'react'


function Square({ value, handleSquareClick }){
  return <button 
    className='border border-gray-600 h-10 w-10 m-2'
    onClick={handleSquareClick}
  >{value}</button>
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  //declare the winner
  const winner = calculateWinner(squares)
  let status;

  if(winner){
    status = `Winner: ${winner}`
  } else {
    status = `Next Player: ${isXNext? 'X':'0'}`
  }

  function handleClick(index) {
    if(squares[index] || calculateWinner(squares)) return; //If there is already a value, don't reflect the click

    console.log("Clicked!")
    const newSquares = squares.slice()

    if(isXNext){
      newSquares[index] = 'X'
    } else {
      newSquares[index] = '0'
    }

    setSquares(newSquares)
    setIsXNext(!isXNext)
  }
  return (
    <>
      {status}
      <div className='flex'>
        <Square value={squares[0]} handleSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} handleSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} handleSquareClick={() => handleClick(2)}/>
      </div>
      <div className='flex'>
        <Square value={squares[3]} handleSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} handleSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} handleSquareClick={() => handleClick(5)}/>
      </div>
      <div className='flex'>
        <Square value={squares[6]} handleSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} handleSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} handleSquareClick={() => handleClick(8)}/>
      </div>
    </>
  )
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}