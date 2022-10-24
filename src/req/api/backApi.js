import http from '../options/baseUrl.js'

export default {
  async userLogin(cpf, password) {
    const path = '/login'
    const req = await http.post(path, { cpf: cpf, password: password }, { options: { 'Content-Type': 'application/json' } })
    return req
  },

  async readUsers(tokenValue) {
    const path = '/users'
    const req = await http.get(path, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async deleteUser(tokenValue, user) {
    const path = `/users/delete/${user}`;
    const req = await http.delete(path, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async updateUser(tokenValue, info) {
    const path = `/users/update/${info._id}`
    const req = await http.put(path, info, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async createUser(tokenValue, info) {
    const path = '/users/create'
    const req = await http.post(path, info, { headers: { 'Authorization': tokenValue } })
    return req
  }

}