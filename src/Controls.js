import Button from './Button'

export default function Controls(props) {
  return <div className='controls'>
    <Button num={-5} setArtID={props.setArtID}>-5</Button>
    <Button num={-1} setArtID={props.setArtID}>-1</Button>
    <Button num={1} setArtID={props.setArtID}>1</Button>
    <Button num={5} setArtID={props.setArtID}>5</Button>
  </div>
}