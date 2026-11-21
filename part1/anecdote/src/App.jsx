import { useState } from 'react'
import './App.css'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.',
]

function App() {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(() => Array(anecdotes.length).fill(0))
  const mostVoted = votes.indexOf(Math.max(...votes))

  const showRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteForSelected = () => {
    setVotes((currentVotes) => {
      const updatedVotes = [...currentVotes]
      updatedVotes[selected] += 1
      return updatedVotes
    })
  }

  return (
    <main className="anecdote-app">
      <section aria-labelledby="random-heading">
        <h1 id="random-heading">Anecdote of the day</h1>
        <p className="anecdote">{anecdotes[selected]}</p>
        <p className="vote-count">Has {votes[selected]} votes</p>
        <div className="actions">
          <button type="button" onClick={voteForSelected}>
            Vote
          </button>
          <button type="button" onClick={showRandomAnecdote}>
            Next anecdote
          </button>
        </div>
      </section>

      <section aria-labelledby="most-voted-heading">
        <h2 id="most-voted-heading">Anecdote with most votes</h2>
        <p className="anecdote">{anecdotes[mostVoted]}</p>
        <p className="vote-count">Has {votes[mostVoted]} votes</p>
      </section>
    </main>
  )
}

export default App
