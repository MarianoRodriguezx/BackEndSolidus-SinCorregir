'use strict'

class RolStore {
  get rules () {
    return {
      name: 'required|min:2|max:50|unique:roles, name',
      status: 'required'
    }
  }

  get messages(){
    return {
      'name.required': 'EL NOMBRE ES UN CAMPO REQUERIDO'
    }
  }
}

module.exports = RolStore
