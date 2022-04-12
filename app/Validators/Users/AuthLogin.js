'use strict'

class AuthLogin {
  get rules () {
    return {
      email: 'required',
      password: 'required'
    }
  }
}

module.exports = AuthLogin
