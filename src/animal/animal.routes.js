import express from "express";
import { deleteAnimal, registerAnimal, testAnimal, updateAnimal } from './animal.controller.js';

const api = express.Router();

api.get('/testAnimal', testAnimal)
api.post('/registerAnimal', registerAnimal)
api.put('/updateAnimal/:id', updateAnimal)
api.delete('/deleteAnimal/:id', deleteAnimal)

export default api