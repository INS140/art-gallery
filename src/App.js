import { useState, useEffect } from 'react'
import Gallery from './Gallery'

export default function App() {
  const [artID, setArtID] = useState(1236)
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artID}`)
      .then(res => res.json())
      .then(resData => {
        console.log(resData)
        setData(resData)
      })
  }, [artID])

  function handleArtIDChange(e) {
    console.log(e)
  }

  return <main>
    <Gallery data={data} />
    <button num={1} onClick={handleArtIDChange}>PUSH ME</button>
  </main>
}