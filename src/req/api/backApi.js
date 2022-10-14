import http from '../options/baseUrl.js'

export default {
  async userLogin(cpf, password) {
    const path = '/login'
    const req = await http.post(path, { cpf: cpf, password: password }, { options: { 'Content-Type': 'application/json' } })
    return req
  }
}