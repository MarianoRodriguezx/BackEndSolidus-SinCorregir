'use strict'

const RolStore = require("../../../Validators/Users/RolStore")
const { validate } = use('Validator')

const Role = use("App/Models/Role")

class RolController {

    async index({response}){
        try{

            const roles = await Role.all()
            response.ok({message: 'Consulta Correcta', data: roles})
        }
        catch(error){
            response.badRequest({message: 'Ocurrio un error', error: error})
        }
    }

    async store({request, response}){
        try
        {
            await Role.create(request.only(Role.store))
            response.ok({message: "Los datos fueron insertados correctamente"}) 
        }
        catch(error){
            response.badRequest({message: 'Ocurrio un error', error: error})
        }
    }

    async update({request, params, response}){
        try{
            const rol = await Role.find(params.id)

            if(rol == null){
                response.notFound({message: "No se encontro el rol solicitado"})
            }

            else{

                rol.name=request.input('name')
                rol.status=request.input('status')

                rol.save()
                response.ok({message: "Los datos fueron modificados satisfactoriamente"})
            }
        }
        catch(error){
            response.internalServerError({message: 'Ocurrio un error', error: error})
        }
    }

    async destroy({params, response}){
        try{
            const rol = await Role.findOrFail(params.id)

            const estado = 0
            rol.status=estado
            response.ok({message: "Se elimino correctamente el rol"})
        }
        catch(error){
            response.notFound({message: "No se encontro el rol solicitado"})
        }
    }

    async show({params, response}){
        try{
            const rol = await Role.findOrFail(params.id)

            response.ok({message: "Se completo la corsulta correctamente", data: rol})
        }
        catch(error){
            response.notFound({message: "No se encontro el rol solicitado"})
        }
    }
}

module.exports = RolController
