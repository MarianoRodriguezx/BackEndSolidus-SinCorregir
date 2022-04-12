'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class VistaHija extends Model {
    static get table(){
        return 'vista_hijas'
    }
}

module.exports = VistaHija
