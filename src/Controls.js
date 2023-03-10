import { useState } from 'react'
import Button from './Button'

export default function Controls(props) {
  const [input, setInput] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    props.setArtID(Number(input))
  }

  function handleChange(e) {
    setInput(e.target.value)
  }

  return <div className='controls'>
    <form onSubmit={handleSubmit}>
      <input
        type='number'
        name='id'
        min={1}
        max={471581}
        value={input}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
    <div className='button-bar'>
      <Button num={-5} setArtID={props.setArtID}>-5</Button>
      <Button num={-1} setArtID={props.setArtID}>-1</Button>
      <Button num={1} setArtID={props.setArtID}>1</Button>
      <Button num={5} setArtID={props.setArtID}>5</Button>
    </div>
  </div>
}