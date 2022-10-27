import http from '../options/baseUrl.js'

export default {

  async createClass(tokenValue, info) {
    const path = '/classes/create'
    const req = await http.post(path, info, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async readClasses(tokenValue) {
    const path = '/classes'
    const req = await http.get(path, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async updateClass(tokenValue, info) {
    const path = `/classes/update/${info._id}`
    const req = await http.put(path, info, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async deleteClass(tokenValue, actualClass) {
    const path = `/classes/delete/${actualClass}`;
    const req = await http.delete(path, { headers: { 'Authorization': tokenValue } })
    return req
  },

}