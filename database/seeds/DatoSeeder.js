'use strict'

/*
|--------------------------------------------------------------------------
| DatoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Role = use("App/Models/Role")

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatoSeeder {
  async run () {
    try{
      Role.create({'name': 'ADMINISTRADOR', 'status': true})
    }
    catch(error){
      return
    }
    
  }
}

module.exports = DatoSeeder
