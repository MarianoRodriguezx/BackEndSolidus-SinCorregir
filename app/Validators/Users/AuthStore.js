'use strict'

class AuthStore {
  get rules () {
    return {
      username: 'required',
      email: 'required|email|unique:users,email',
      rol: 'required',
      password: 'required'
    }
  }
}

module.exports = AuthStore
