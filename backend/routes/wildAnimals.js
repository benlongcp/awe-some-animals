import express from 'express';
import { catchAnimal } from '../controllers/wildAnimalController.js';

const router = express.Router();


//get one animal from the Animals API
router.get('/:id', catchAnimal)


export default router