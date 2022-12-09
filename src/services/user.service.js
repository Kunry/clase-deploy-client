import InitAxios from './initAxios.service';

class UserAPI extends InitAxios {
  constructor() {
    super('user')
  }

  me(token) {
    return this.axios.get('/me', {
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then((response) => response.data);
  }

  // config --> header --> authorization --> Bearer token
  // axios.get(ruta, config) 
  // axios.delete(ruta, config)
  // axios.post(ruta, body, config)
  // axios.put(ruta, body, config)
}

export default new UserAPI();