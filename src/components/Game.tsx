import { useState } from 'react'
import { SquareValue } from '../types'
import Board from './Board'

export default function Game(){
  const [history, setHistory] = useState<SquareValue[][]>([Array(9).fill(null)]) // Initially, 1 array of null inside the outer history array.
  const [isXNext, setIsXNext] = useState<boolean>(true)
  const [currentMove, setCurrentMove] = useState<number>(0)
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares: SquareValue[]){
    setIsXNext(!isXNext)
    const nextHistory = [...history.slice(0,currentMove+1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length-1)
  }

  function jumpTo(move: number){
    setCurrentMove(move)
    setIsXNext(move%2 == 0)
  }

  const moves = history.map((_squares, move) => {
    let description
    if(move > 0){
      description = `Go to move #${move}`
    } else {
      description = `Start the game`
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return(
    <div>
      <div>
        <Board
          squares={currentSquares}
          isXNext={isXNext}
          onPlay={handlePlay}
        />
      </div>
      <div>History</div>
      <ol>
        {moves}
      </ol>
    </div>
  )
}
