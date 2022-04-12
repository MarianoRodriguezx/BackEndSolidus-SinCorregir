'use strict'
const User = use("App/Models/User")

class AuthController {
    async login ({ auth, request, response }) 
    {
        try{
            const { email, password } = request.only(User.logueo)

            const token = await auth.withRefreshToken().attempt(email, password)
    
            response.ok({message: 'logueo exitoso', token: token['token']})
        }
        catch(error){
            console.log(error)
            response.internalServerError({message: 'OCURRIO UN ERROR'})
        }
    }

    async register({request, response})
    {
        try{
            await User.create(request.only(User.store))
        }
        catch(error){
            response.badRequest({message: 'OCURRIO UN ERROR'})
        }
    }

    async logout({auth}){
        try{
            const refreshToken = ''
            const apiToken = auth.getAuthHeader()

            await auth
                .authenticator('jwt')
                .revokeTokens([refreshToken], true)

            await auth
                .authenticator('api')
                .revokeTokens([apiToken])
        }
        catch(error){
            response.badRequest({message: 'OCURRIO UN ERROR'})
        }
    }

    async show ({ auth }) 
    {
        return auth.user
    }

    async rol({ auth }){
        try{
            return auth.user.rol
        }
        catch(error){
            response.badRequest({message: 'OCURRIO UN ERROR'})
        }
    }

    async VerificarUsuario({auth}){
        try{

            await auth.check()
            return true

        } catch (error) {
            return false
        }
    }

}

module.exports = AuthController
