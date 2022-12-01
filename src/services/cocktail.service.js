import axios from 'axios';

class CocktailAPI {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:5005/api',
    });
  }

  getAllCocktails(page) {
    return this.axios
      .get(`/cocktail?limit=10&offset=${page}`)
      .then((response) => response.data);
  }

  getOneCocktailById(id) {
    return this.axios.get(`/cocktail/${id}`).then((response) => response.data);
  }

  createCocktail(body) {
    return this.axios.post(`/cocktail`, body).then((response) => response.data);
  }

  updateOneCocktailById(id, body) {
    return this.axios
      .put(`/cocktail/${id}`, body)
      .then((response) => response.data);
  }

  deleteOneCocktailById(id) {
    return this.axios
      .delete(`/cocktail/${id}`)
      .then((response) => response.data);
  }
}

export default new CocktailAPI();
