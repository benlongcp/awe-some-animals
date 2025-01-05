import express from 'express';
import {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal
 } from '../controllers/animalController.js'


const router = express.Router();




//get all animals
router.get('/', getAnimals)





//get one animal
router.get('/:id', getAnimal)




//post animal
router.post('/', createAnimal)





//delete animal
router.delete('/:id', deleteAnimal)





//update animal
router.patch('/:id', updateAnimal)





export default router