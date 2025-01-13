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

  const color = () =>{
    if (fate === "adopt"){
      return '#B4A0E5'
    }
    
    if (fate === "wrestle"){
      return '#436436'
    }
    
    if (fate === "eat"){
      return '#72A1E5'
    }
    

  }



  return (
    <Box ref={drag}
    id='adopt'
    sx={{backgroundColor: color(), padding: '16px', borderRadius: '4px', "&:hover": { cursor: "pointer" }}}
    style={{border: isDragging ? '5px solid #FF99C8' : '0px'}}>
      {fate}
    </Box>
  )
}



export default Fate
