import http from '../options/baseUrl.js'

export default {

  async createSubject(tokenValue, info) {
    const path = '/subjects/create'
    const req = await http.post(path, info, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async readSubjects(tokenValue) {
    const path = '/subjects'
    const req = await http.get(path, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async updateSubject(tokenValue, info) {
    const path = `/subjects/update/${info._id}`
    const req = await http.put(path, info, { headers: { 'Authorization': tokenValue } })
    return req
  },

  async deleteSubject(tokenValue, subject) {
    const path = `/subjects/delete/${subject}`;
    const req = await http.delete(path, { headers: { 'Authorization': tokenValue } })
    return req
  },

}