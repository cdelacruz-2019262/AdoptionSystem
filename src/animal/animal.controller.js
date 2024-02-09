'use strict'

import Animal from './animal.model.js'

export const testAnimal = (req, res) => {
    console.log('animal test is running')
    return res.send({ message: 'animal test is running' })
}

export const registerAnimal = async (req, res) => {
    try {
        //capturar el body
        let data = req.body
        console.log(data)
        //asignar un rol por defecto
        data.role = 'AVAILABLE'
        //guardar la info en la db
        let animal = new Animal(data)
        await animal.save()
        //respuesta
        return res.send({ message: `registered successfully, ${animal.name} is part of the family now` })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error registering animal', err: err })
    }
}

export const searchAnimal = async (req, res) => {
    try {

    } catch (err) {

    }
}

export const updateAnimal = async (req, res){
    try{
        let{ id } = req.params
        let data = req.body 
        //Actualizar
        let updatedUser = await Animal.findOneAndUpdate(
            { _id: id },
            data,
            
        )
    }
}