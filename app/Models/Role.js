'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Role extends Model {
    static get table(){
        return 'roles'
    }

    static get store(){
        return [
            'name',
            'status'
        ]
    }

    rol(){
        return this.hasMany('App/Models/User')
    }
}

module.exports = Role
