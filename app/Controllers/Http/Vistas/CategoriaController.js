'use strict'

const Categoria = use("App/Models/Categoria")

class CategoriaController {
  
  async index ({ request, response }) {
    try{
      const categoria = await Categoria.all()

      response.ok({message: "consulta correcta", data: categoria})
    }
    catch(error){
      response.badRequest({message: "ocurrio un error"})
    }
  }

  async store ({ request, response }) {
    try{
      await Categoria.create(request.only(Categoria.store))

      response.ok({message: "Insertado correctamente"})
    }
    catch(error){
      response.badRequest({message: "ocurrio un error"})
    }
  }

  async show ({ params, request, response }) {
  }

 
  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = CategoriaController
