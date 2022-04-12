'use strict'

const Database = require("@adonisjs/lucid/src/Database")
const VistaHija = use("App/Models/VistaHija")


/**
 * Resourceful controller for interacting with vistahijas
 */
class VistaHijaController {
  
  async index ({ request, response }) {

    const vh = await VistaHija.all()
    response.ok({message: "consulta correcta", data: vh})

  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async prueba({response}){
    try{

      const consulta = await Database

    }
    catch(error){
      
    }
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = VistaHijaController
