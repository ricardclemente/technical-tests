import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './facts'

function useRandomImage({fact}){
  const [image,setImage] = useState()
  
  useEffect(()=>{
    if(!fact) return
    const firstWord=fact.split(' ')[0]
      
    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
    .then(answer=>answer.json())
    .then(data => setImage(`https://cataas.com/${data.url}`))
  },[fact])

  return image
}

function App() {
  const [fact, setFact] = useState()
  const image = useRandomImage({fact})
  useEffect(()=>{
    getRandomFact().then(newFact => setFact(newFact))
  },[])

  const handleClick=()=>{
    getRandomFact().then(newFact => setFact(newFact))
  }
 
  return (
    <>
      <main>
        <h1>Cat App</h1>
        <section>
          {fact && <p>{fact}</p>}
          {image && <img src={image} alt={`Image from cataas.com using the word ${fact}`}></img>}
        </section>
        
        
        <button onClick={handleClick}>Get new Fact</button>
      </main>

      
    </>
  )
}

export default App
