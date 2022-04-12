const Route = use('Route')

Route.group(() => { 

    Route.resource('categorias', 'CategoriaController').apiOnly()
    
 }).namespace('Vistas').middleware(['auth'])