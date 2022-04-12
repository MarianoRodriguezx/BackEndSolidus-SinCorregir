const Route = use('Route')

Route.group(() => {

    Route.post('login', 'AuthController.login').validator('Users/AuthLogin')
    Route.post('register', 'AuthController.register').validator('Users/AuthStore')
    
    
}).namespace('App/Controllers/Http/Users').prefix('auth/v1')

Route.group(() => {

    Route.get('user', 'AuthController.show')
    Route.get('logout', 'AuthController.logout')
    Route.get('verificarToken', 'AuthController.VerificarUsuario')
    Route.get('rol_user', 'AuthController.rol')
    
    
}).namespace('Users').prefix('auth/v1').middleware(['auth'])