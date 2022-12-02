import InitAxios from './initAxios.service';

class AuthAPI extends InitAxios {
  constructor() {
    super('auth')
  }

  registroUser(body) {
    return this.axios.post('/registro', body).then((response) => response.data);
  }

  loginUser(body) {
    return this.axios.post('/login', body).then((response) => response.data);
  }
}

export default new AuthAPI();