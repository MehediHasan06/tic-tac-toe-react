interface SquareProps {
  value: string | null;
  handleSquareClick: () => void;
}

export default function Square({ value, handleSquareClick }: SquareProps){
  return (
    <button 
      className='border border-gray-600 h-10 w-10 m-2'
      onClick={handleSquareClick}
    >
      {value}
    </button>
  )
}
