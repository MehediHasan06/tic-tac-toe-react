import { SquareValue } from '../types'
import calculateWinner from '../utils/calculateWinner'
import Square from './Square'

interface BoardProps {
  squares: SquareValue[];
  isXNext: boolean;
  onPlay: (squares: SquareValue[]) => void
}

export default function Board({ squares,isXNext,onPlay }: BoardProps) {

  // handle status
  const winner = calculateWinner(squares)
  let status;
  if(winner){
    status = `Winner: ${winner}`
  } else {
    status = `Next Player: ${isXNext? 'X':'0'}`
  }

  // handle square click
  function handleClick(index:number) {
    if(squares[index] || calculateWinner(squares)) return; //If there is already a value or, already a winner, block the click
    
    const newSquares = squares.slice()
    if(isXNext){
      newSquares[index] = 'X'
    } else {
      newSquares[index] = '0'
    }

    onPlay(newSquares)
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


