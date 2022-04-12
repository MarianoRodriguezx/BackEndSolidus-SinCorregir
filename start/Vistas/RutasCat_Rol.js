const Route = use('Route')

Route.group(() => { 

    Route.resource('categorias_rol', 'CategoriaRolController').apiOnly()
    Route.get('categorias_roles', 'CategoriaRolController.showMe')
    
}).namespace('Vistas').middleware(['auth'])