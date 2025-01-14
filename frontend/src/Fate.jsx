import Box from '@mui/material/Box';
import { useDrag } from 'react-dnd';
import { useState } from 'react';

function Fate({
  // eslint-disable-next-line react/prop-types
  fate,
  adoptDrop,
  wrestleDrop,
  eatDrop
}) {


  const [{isDragging}, drag] = useDrag(()=>({
    type: "box",
    item: {id: fate},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))




  const color = () =>{
    if (fate === "adopt" && !adoptDrop){
      return '#B4A0E5'
    }

    if (fate === "wrestle" && !wrestleDrop){
      return '#436436'
    }

    if (fate === "eat" && !eatDrop){
      return '#72A1E5'
    }

    return 'gray'
  }

  const enable = () => {
    if (fate === "adopt" && adoptDrop){
      return false
    }
    if (fate === "wrestle" && wrestleDrop){
      return false
    }
    if (fate === "eat" && eatDrop){
      return false
    }
    return true
  }



  return (

    <Box>
      { enable() ?
        <Box ref={drag}
    
    
        sx={{display: 'flex', minHeight: '48px', justifyContent: 'center', textAlign: 'center', alignItems: 'center', backgroundColor: color(), padding: '16px', aspectRatio: '1 / 1', borderRadius: '100%', "&:hover": { cursor: "pointer" }}}
        style={{border: isDragging ? '5px solid #FF99C8' : '0px'}}>
          {fate}
        </Box>

        :
        <Box 
      
    
        sx={{minHeight: '48px', alignItems: 'center' , textAlign: 'center', backgroundColor: color(), padding: '16px', aspectRatio: '1 / 1', borderRadius: '100%', "&:hover": { cursor: "pointer" }}}
        style={{border: isDragging ? '5px solid #FF99C8' : '0px'}}>
          
        </Box>

      }
    </Box>




  )
}



export default Fate
