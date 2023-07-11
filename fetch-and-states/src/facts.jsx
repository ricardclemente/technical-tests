const ENDPOINT_RANDOM_FACT ='https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const answer = await fetch(ENDPOINT_RANDOM_FACT)
    const data = await answer.json()
    const newFact = data.fact
    console.log(newFact)
    return newFact  
  }