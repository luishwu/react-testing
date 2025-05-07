import './App.css'

<<<<<<< HEAD
import { TwitterFollowCard } from './components/TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'LuisHWu',
    name: 'Luis Wu',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
=======
import { useState } from 'react'

const TURNS = {
  X: '❌',
  O: '⭕'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  } 
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) //null no hay ganador, false empate, true hay ganador

  const checkForWinner = (boardToCheck) => {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a] //X o O
      }
    }
    return null
  }
  const updateBoard = (index) => {
    //no actualizamos un square si ya tiene algo
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //comprobar si hay un ganador
    const newWinner = checkForWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else {
      //comprobar si hay empate
      if (newBoard.every(square => square !== null)) {
        setWinner(false)
      }

    }
  } 

  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <section className='game'>
        {
          board.map((_, index) => (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          ))
        }
      </section>
      <section className='turn'>
        <Square isSelected = {turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected = {turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <section className='winner'>
        {winner === null ? null : winner === false ? <p>Empate</p> : <p>{winner} ha ganado</p>}
        <button onClick={() => {
          setBoard(Array(9).fill(null))
          setWinner(null)
          setTurn(TURNS.X)
        }}>
          Reiniciar el juego
        </button>
      </section>  
    </main>
  )
}

export default App
>>>>>>> dc747d2 (Add Tres en Raya project)
