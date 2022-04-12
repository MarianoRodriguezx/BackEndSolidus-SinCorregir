const Route = use('Route')

Route.group(() => { 

    Route.resource('roles', 'RolController').validator(new Map([

        [['roles.store'], ['Users/RolStore']],
        [['roles.update'], ['Users/RolStore']]
        
    ])).apiOnly()
    
}).namespace('Users').prefix('api/v1')