import AnimalCard from "./AnimalCard.jsx"
import { Button, Box } from "@mui/material"
import { useState, useEffect } from "react"
import animalData from './../../animalData.json'
import { DndProvider, useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Fate from "./Fate.jsx"



function App() {

  const { animalNames } = animalData
  const length = animalNames.length
  const [animals, setAnimals] = useState([])
  const [fates, setFates] = useState(['adopt', 'wrestle', 'eat'])

  const [adoptDrop, setAdoptDrop] = useState(false)
  const [wrestleDrop, setWrestleDrop] = useState(false)
  const [eatDrop, setEatDrop] = useState(false)

  

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

  

// console.log("LES ANIMAUX:", animals)

  return (

    <DndProvider backend={HTML5Backend}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px'}}>

        <Button variant="contained" sx={{background: 'Coral', width: '120px'}} onClick={randAnimals}>NEW AWE</Button>

        <Box sx={{display: 'flex', flexDirection: 'row', gap: "18px"}}>
          {fates.map(fate => (
            <Fate key={fate} fate={fate}/>
          ))}


        </Box>




        {animals.length === 3 ?
        <Box sx={{display: 'flex', flexDirection: 'row', gap: "18px"}}>
          {animals.map(animal=>(
            <Box key={animal}>
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
    </DndProvider>
  )
}

export default App
