import http from '../options/baseUrl.js'

export default {

  async createAction(tokenValue, info) {
    const path = '/actions/create'
    const req = await http.post(path, info, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async readActions(tokenValue) {
    const path = '/actions'
    const req = await http.get(path, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async updateActions(tokenValue, info) {
    const path = `/actions/update/${info._id}`
    const req = await http.put(path, info, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async deleteActions(tokenValue, action) {
    const path = `/actions/delete/${action}`;
    const req = await http.delete(path, { headers: { 'Authorization': tokenValue } })
    return req
  },

}