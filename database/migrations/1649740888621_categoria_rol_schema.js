'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriaRolSchema extends Schema {
  up () {
    this.create('categoria_rols', (table) => {
      table.increments('id').primary()
      table.integer('categoria').unsigned().references('id').inTable('categorias')
      table.integer('rol').unsigned().references('id').inTable('roles')
      table.timestamps()
    })
  }

  down () {
    this.drop('categoria_rols')
  }
}

module.exports = CategoriaRolSchema
