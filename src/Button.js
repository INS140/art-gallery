export default function Button(props) {
  function handleArtIDChange() {
    props.setArtID(prevID => prevID + props.num)
  }

  return <button onClick={handleArtIDChange}>{props.children}</button>
}