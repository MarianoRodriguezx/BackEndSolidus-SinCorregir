'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VistaHijasSchema extends Schema {
  up () {
    this.create('vista_hijas', (table) => {
      table.increments('id').primary()
      table.string('nombre').notNullable()
      table.string('ruta').notNullable()
      table.string('icono').notNullable()
      table.integer('categoria').unsigned().references('id').inTable('categorias')
      table.timestamps()
    })
  }

  down () {
    this.drop('vista_hijas')
  }
}

module.exports = VistaHijasSchema
