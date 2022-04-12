'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {

    static get table(){
        return 'categorias'
    }

    static get store(){
        return [
            'nombre',
            'icono',
            'status'
        ]
    }

    cats(){
        return this.hasMany('App/Models/CategoriaRol', 'id', 'categoria')
    }

}

module.exports = Categoria
