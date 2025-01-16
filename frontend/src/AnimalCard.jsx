// import { Box } from "@mui/material"
import { useEffect } from 'react';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDrop } from 'react-dnd';


export default function AnimalCard ({
  // eslint-disable-next-line react/prop-types
  animalName,
  setAdoptDrop,
  setWrestleDrop,
  setEatDrop,
  setDisplayAnimal
}) {

  const [fate, setFate] = useState('')

  const [{canDrop, isOver}, drop] = useDrop(()=>({
    accept: 'box',
    drop: (item) => addFate(item.id),
    collect: (monitor)=>({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

  const defaultColor = '#EAF2E3'
  let overColor = '#DCEDB9'

  const [fateColor, setFateColor] = useState('#EAF2E3') 

  useEffect(()=>{

  })

  const addFate = (id)=>{

    console.log("id", id)

    if (id === 'adopt'){
      setFateColor('#B4A0E5')
      setFate('ADOPT')
      setAdoptDrop(true)
    }

    if (id === "wrestle"){
      setFateColor('#436436')
      setFate('WRESTLE')
      setWrestleDrop(true)
    }
    
    if (id === "eat"){
      setFateColor('#72A1E5')
      setFate('EAT')
      setEatDrop(true)
    }

  }

  const catchAnimal = async (animal) =>{
    const response = await fetch(`http://localhost:4000/api/wildAnimals/${animal}`)
    const json = await response.json()

    if (response.ok){
      console.log("JSON DATA", json)
      setDisplayAnimal(json[0])

    }
  }

  return (
    <Card sx={{ minHeight: '180px', maxWidth: 275, background: fate ? fateColor : isOver? overColor : defaultColor, border: canDrop? '5px solid #FF99C8' : '0px' }} ref={!fate ? drop : null}>
      <CardContent>
          {animalName ? 

        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {animalName}
          </Typography>
          :
          <Typography gutterBottom sx={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', color: 'text.secondary', fontSize: 14, paddingTop: '25%' }}>
            Select NEW AWE to

            &quot;MEAT&quot; SOME ANIMALS
          </Typography>


          }

        <Typography variant="h6" component="div">
          {fate? 'FATE:' : null}
        </Typography>

        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
        {fate}
        </Typography>


        <Typography variant="body2">
        </Typography>

      </CardContent>
      <CardActions>
      {fate?
        <Button size="small"
          onClick={()=>{catchAnimal(animalName)}}
        >Learn More</Button>
      :

      null}


      </CardActions>
    </Card>
  );
}