import AnimalCard from "./AnimalCard"
import { Button, Box } from "@mui/material"
import { useState, useEffect } from "react"
import animalData from './../../animalData.json'


function App() {

  const { animalNames } = animalData
  const length = animalNames.length
  const [animals, setAnimals] = useState([])
  

  const randAnimals = () =>{
    let randInt1 = Math.floor((Math.random() * length))
    let randInt2 = Math.floor((Math.random() * length))
    let randInt3 = Math.floor((Math.random() * length))
    // console.log("RANDOM NUMS", randInt1, randInt2, randInt3)

    let animal1 = animalNames[randInt1]
    let animal2 = animalNames[randInt2]
    let animal3 = animalNames[randInt3]
    // console.log("ANIMALS", animal1, animal2, animal3)

    setAnimals([animal1, animal2, animal3])
  }

  useEffect(()=>{

  })



console.log("LES ANIMAUX:", animals)

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px'}}>
      <Button variant="contained" sx={{background: 'Coral', width: '120px'}} onClick={randAnimals}>NEW AWE</Button>
      {animals.length === 3 ?
      <Box sx={{display: 'flex', flexDirection: 'row', gap: "18px"}}>
        {console.log("!!!", animals.length)}
        {animals.map(animal=>(
          <Box>
          <AnimalCard
            sx={{gap: 2}}
            animalName={animal}
          />
          </Box>
        ))}
      </Box>
      :
        null
      }
    </Box>
  )
}

export default App
