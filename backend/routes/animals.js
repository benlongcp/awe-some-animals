import express from 'express';
import Animal from './../models/animalModel.js';

const router = express.Router();




//get all animals
router.get('/', (req, res)=>{
    res.json({mssg: 'GET all animals'})
})





//get one animal
router.get('/:id', (req, res) =>{
  res.json({mssg: 'GET one animal'})
})





//post animal
router.post('/', async (req, res)=>{
  
  
  console.log(req.body)
  const { name, fate } = req.body

  try{
    const animal = await Animal.create({name, fate})
    res.status(200).json(animal)
  } catch(error){
    res.status(400).json({error: error.message})
  }
})





//delete animal
router.delete('/:id', (req, res)=>{
  res.json({mssg: 'DELETE animal'})
})





//update animal
router.patch('/:id', (req, res)=>{
  res.json({mssg: 'UPDATE animal'})
})





export default router