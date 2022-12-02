import InitAxios from './initAxios.service';

class CocktailAPI extends InitAxios {
  constructor() {
    super('cocktail')
  }

  getAllCocktails(page) {
    return this.axios
      .get(`/?limit=10&offset=${page}`)
      .then((response) => response.data);
  }

  getOneCocktailById(id) {
    return this.axios.get(`/${id}`).then((response) => response.data);
  }

  createCocktail(body) {
    return this.axios.post(`/`, body).then((response) => response.data);
  }

  updateOneCocktailById(id, body) {
    return this.axios
      .put(`/${id}`, body)
      .then((response) => response.data);
  }

  deleteOneCocktailById(id) {
    return this.axios
      .delete(`/${id}`)
      .then((response) => response.data);
  }
}

export default new CocktailAPI();
