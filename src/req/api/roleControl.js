import http from '../options/baseUrl.js'

export default {

  async createRole(tokenValue, info) {
    const path = '/roles/create'
    const req = await http.post(path, info, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async readRoles(tokenValue) {
    const path = '/roles'
    const req = await http.get(path, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async deleteRoles(tokenValue, role) {
    const path = `/roles/delete/${role}`;
    const req = await http.delete(path, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async addActionsInRoles(tokenValue, info) {
    const path = `/roles/actions/${info._id}`
    const req = await http.put(path, info, { headers: { 'Authorization': tokenValue } })
    return req
  },

}