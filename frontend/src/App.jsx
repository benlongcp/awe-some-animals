import AnimalCard from "./AnimalCard.jsx"
import { Button, Box } from "@mui/material"
import { useState, useEffect } from "react"
import animalData from './../../animalData.json'

import Fate from "./Fate.jsx"





function App() {

  const { animalNames } = animalData
  const length = animalNames.length
  const [animals, setAnimals] = useState([])
  const [fates, setFates] = useState(['adopt', 'wrestle', 'eat'])
  const [adoptDrop, setAdoptDrop] = useState(false)
  const [wrestleDrop, setWrestleDrop] = useState(false)
  const [eatDrop, setEatDrop] = useState(false)

  const [allAnimals, setAllAnimals] = useState(null)
  const [fatesChosen, setFatesChosen] = useState(adoptDrop && wrestleDrop && eatDrop)
  const [displayAnimal, setDisplayAnimal] = useState({})

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
    setAdoptDrop(false)
    setWrestleDrop(false)
    setEatDrop(false)
    setDisplayAnimal({})
  }



  useEffect(()=>{

    const fetchAnimals = async () =>{
      const response = await fetch(`http://localhost:4000/api/animals`)
      const json = await response.json()
      console.log("JSON DATA", json)

      if (response.ok){
        setAllAnimals(json)
      }
    }
    fetchAnimals()

  }, [])



  return (

  
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '18px', backgroundColor: "#CBD4C2", height: "100vh"}}>

      <h1>ADOPT, WRESTLE, or EAT</h1>
      {console.log(displayAnimal)}



        {animals.length === 3 ?
        <Box sx={{display: 'flex', flexDirection: 'row', gap: "18px"}}>
          {animals.map(animal=>(
            <Box key={animal}>
            <AnimalCard
              sx={{gap: 2}}
              animalName={animal}
          
              setAdoptDrop={setAdoptDrop}
              setWrestleDrop={setWrestleDrop}
              setEatDrop={setEatDrop}
              setDisplayAnimal={setDisplayAnimal}


            />
            </Box>
          ))}
        </Box>
        :
          <AnimalCard/>
        }






        <Box sx={{display: 'flex', flexDirection: 'row', gap: "18px"}}>
          {fates.map(fate => (
            <Fate 
            key={fate} 
            fate={fate}
            adoptDrop={adoptDrop}
            wrestleDrop={wrestleDrop}
            eatDrop={eatDrop}
            
            />
          ))}


        </Box>
        DRAG &apos;N DROP

        <Button variant="contained" sx={{background: '#E57A44', width: '120px', margin: '16px'}} onClick={randAnimals}>NEW AWE</Button>






      </Box>

  )
}

export default App
