'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//Rutas relacionadas a los usuarios//

require('./Users/RutasRoles')
require('./Users/AuthRutas')

//Rutas relacionadas a las vistas//

require('./Vistas/RutasCategorias')
require('./Vistas/RutasCat_Rol')
require('./Vistas/RutasVistasHijas')