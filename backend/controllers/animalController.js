import Animal from './../models/animalModel.js';
import mongoose from 'mongoose';

//get all animals
const getAnimals = async (req, res)=>{
  const animals = await Animal.find({}).sort({createdAt: -1})

  res.status(200).json(animals)
}




//get single animal
const getAnimal = async (req, res)=>{
  
  //destructures to find the id
  const { id } = req.params
  console.log("REQ PARAMs", req.params)

if (!mongoose.Types.ObjectId.isValid(id)){
  return res.status(404).json({error: 'animal id does not exist'})
}


  const animal = await Animal.findById(id)

  if (!animal){
    return res.status(400).json({error: "animal does not exist"})
  }

  res.status(200).json(animal)
}





//add new animal
const createAnimal = async (req, res)=>{
  const { name, fate } = req.body

  //add doc to db
  try{
    const animal = await Animal.create({name, fate})
    res.status(200).json(animal)
  } catch(error){
    res.status(400).json({error: error.message})
  }
}




//delete an animal
const deleteAnimal = async (req, res) =>{
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'animal id does not exist'})
  }

  const animal = await Animal.findOneAndDelete({_id: id})

  if (!animal){
    return res.status(400).json({error: "animal does not exist"})
  }

  res.status(200).json(animal)

}



//update an animal
const updateAnimal = async (req, res)=>{

  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'animal id does not exist'})
  }
  const animal = await Animal.findOneAndUpdate({_id: id}, {...req.body})

  if (!animal){
    return res.status(400).json({error: "animal does not exist"})
  }

  res.status(200).json(animal)
}




export {
  getAnimals,
  getAnimal,
  createAnimal,
  deleteAnimal,
  updateAnimal
}