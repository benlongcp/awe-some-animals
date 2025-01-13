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

  let fateColor;

  useEffect(()=>{

  })
  const addFate = (id)=>{
    console.log("id", id)
    if (id === 'adopt'){
      fateColor = '#B4A0E5'
      setFate('ADOPT')
    }

    if (id === "wrestle"){
      fateColor = '#436436'
      setFate('WRESTLE')
    }
    
    if (id === "eat"){
      fateColor = '#72A1E5'
      setFate('EAT')
    }

  }





  return (
    <Card sx={{ maxWidth: 275, background: isOver? overColor : defaultColor, border: canDrop? '5px solid #FF99C8' : '0px' }} ref={drop}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {animalName}
        </Typography>

        <Typography variant="h6" component="div">
          FATE:
        </Typography>

        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
        {fate}
        </Typography>


        <Typography variant="body2">
        </Typography>

      </CardContent>
      <CardActions>

        <Button size="small">Learn More</Button>

      </CardActions>
    </Card>
  );
}