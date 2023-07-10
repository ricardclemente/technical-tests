import { useEffect, useState } from 'react'
import './App.css'

const ENDPOINT_RANDOM_FACT ='https://catfact.ninja/fact'

function App() {
  const [fact, setFact] = useState()
  const [image,setImage] = useState()
  useEffect(()=>{
    fetch(ENDPOINT_RANDOM_FACT)
    .then(answer => answer.json())
    .then(data => {
      setFact(data.fact)
      
    })
  },[])

  useEffect(()=>{
    if(!fact) return
    const firstWord=fact.split(' ')[0]
      
    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
    .then(answer=>answer.json())
    .then(data => setImage(`https://cataas.com/${data.url}`))
  },[fact])

  return (
    <>
      <main>
        <h1>Cat App</h1>
        <section>
          {fact && <p>{fact}</p>}
          {image && <img src={image} alt={`Image from cataas.com using the word ${fact}`}></img>}
        </section>
      </main>

      
    </>
  )
}

export default App
