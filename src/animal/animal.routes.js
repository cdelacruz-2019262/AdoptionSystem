import express from "express";
import { registerAnimal, testAnimal } from './animal.controller.js';

const api = express.Router();

api.get('/testAnimal', testAnimal)
api.get('/registerAnimal', registerAnimal)

export default api