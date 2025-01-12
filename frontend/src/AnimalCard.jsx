// import { Box } from "@mui/material"

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

  const [{canDrop, isOver}, drop] = useDrop(()=>({
    accept: 'box',
    drop: (item) => addFate(item.id),
    collect: (monitor)=>({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))


  const addFate = (id)=>{
    console.log("id", id)

  }

  return (
    <Card sx={{ maxWidth: 275, background: isOver? 'blue' : 'AliceBlue', border: canDrop? '5px solid pink' : '0px' }} ref={drop}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {animalName}
        </Typography>

        <Typography variant="h5" component="div">
        </Typography>

        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>

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