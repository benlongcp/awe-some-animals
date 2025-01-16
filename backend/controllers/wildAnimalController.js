import axios from 'axios'
import 'dotenv/config'

let apiKey = process.env.NINJA_KEY

const config = {
  method: 'GET',
  headers: { 'x-api-key': `${apiKey}` }
};

const catchAnimal = (req, res) =>{

  console.log("PARAMS", req.params.id)


  axios.get(`https://api.api-ninjas.com/v1/animals?name=${req.params.id}`, config)
    .then(response => {
      // Handle the successful response
      console.log("RESPONSE", response.data);
      res.status(200).send(response.data)
    })
    .catch(error => {
      // Handle any errors
      console.log("ERROR CATCHING ANIMAL")
      console.error("ERROR!!!!", error);
      res.sendStatus(500)
    });

}

export {
  catchAnimal
}