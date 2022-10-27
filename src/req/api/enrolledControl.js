import http from '../options/baseUrl.js'

export default {

  async createEnrolled(tokenValue, info) {
    const path = '/enrolled/create'
    const req = await http.post(path, info, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async readEnrolleds(tokenValue) {
    const path = '/enrolled'
    const req = await http.get(path, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async updateEnrolled(tokenValue, info) {
    const path = `/enrolled/update/${info._id}`
    const req = await http.put(path, info, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async deleteEnrolled(tokenValue, enrolled) {
    const path = `/enrolled/delete/${enrolled}`;
    const req = await http.delete(path, { headers: { 'Authorization': tokenValue } })
    return req
  },

}