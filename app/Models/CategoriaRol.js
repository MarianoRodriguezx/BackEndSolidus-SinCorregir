'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CategoriaRol extends Model {
    static get table(){
        return 'categoria_rols'
    }

    cats(){
        return this.belongsTo('App/Models/Categoria', 'categoria', 'id')
    }
}

module.exports = CategoriaRol
