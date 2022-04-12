const Route = use('Route')

Route.group(() => { 

    Route.resource('vistas', 'VistaHijaController').apiOnly()
    
 }).namespace('Vistas')