import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose'
import animalRoutes from './routes/animals.js'
import wildAnimals from './routes/wildAnimals.js'
import cors from 'cors'



//express app
const app = express();


//middleware
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/animals', animalRoutes)
app.use('/api/wildAnimals', wildAnimals)


//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log("connected to db")
    // listen for requests
    app.listen(process.env.PORT, () =>{
      console.log(`Listening on port ${process.env.PORT}`)
    })

  })
  .catch((err)=>{console.log("error connecting to db", err)})

