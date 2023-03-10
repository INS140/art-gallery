import { useState, useEffect } from 'react'
import Gallery from './Gallery'
import Controls from './Controls'

export default function App() {
  const [artID, setArtID] = useState(12700)
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artID}`)
      .then(res => res.json())
      .then(resData => {
        console.log(resData)
        setData(resData)
      })
  }, [artID])

  return <main>
    <Gallery data={data} />
    <Controls artID={artID} setArtID={setArtID} />
  </main>
}