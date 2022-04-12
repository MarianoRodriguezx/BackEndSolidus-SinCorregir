'use strict'

const CategoriaRol = use('App/Models/CategoriaRol')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categoriarols
 */
class CategoriaRolController {
  /**
   * Show a list of all categoriarols.
   * GET categoriarols
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response }) {
    try{
      const cat_rol = await CategoriaRol.query().with('cats').fetch()

      //return cat_rol
      response.ok({message: "Consulta Correcta", data: cat_rol})
    }
    catch(error){
      response.badRequest({message: "error"})
    }
  }

  /**
   * Render a form to be used for creating a new categoriarol.
   * GET categoriarols/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new categoriarol.
   * POST categoriarols
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single categoriarol.
   * GET categoriarols/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async showMe ({ response, auth }) {
    try{
      const rol = await auth.user.rol

      const cat_rol = await CategoriaRol.query().with('cats').where('rol', rol).fetch()

      response.ok({message: "consulta correcta", data: cat_rol})
      //return cat_rol
    }
    catch(error){
      response.badRequest({message: "error"})
    }
  }

  /**
   * Render a form to update an existing categoriarol.
   * GET categoriarols/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update categoriarol details.
   * PUT or PATCH categoriarols/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a categoriarol with id.
   * DELETE categoriarols/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CategoriaRolController
