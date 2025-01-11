import Box from '@mui/material/Box';
import { useDrag } from 'react-dnd';

function Fate({
  // eslint-disable-next-line react/prop-types
  fate
}) {



  const [{isDragging}, drag] = useDrag(()=>({
    type: "box",
    item: {id: fate},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))





  return (
    <Box ref={drag}
    id='adopt'
    sx={{backgroundColor: 'green', padding: '4px'}}
    style={{border: isDragging ? '5px solid pink' : '0px' }}>
      {fate}
    </Box>
  )
}



export default Fate
