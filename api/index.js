import axios from "axios";

// let url = process.env.STATUS == 'production' ? "https://api.mapadainformacao.com.br/api/" : "https://mapa-da-informacao-admin.herokuapp.com/api/"

// let url = "https://mapa-da-informacao-admin.herokuapp.com/api/"
// let url = "https://prod-mapa-da-informacao-admin.herokuapp.com/api/"
let url = "https://api.mapadainformacao.com.br/api/"

class Api {
  constructor() {
    axios.defaults.baseURL = url
  }

  baseUrl = url

  getMaps = () => {
    return axios.get('/maps').then((response) => response)
  };

  getMap = (id) => {
    return axios.get(`/maps/${id}`).then((response) => response)
  };

  getCategories = () => {
    return this.get("/categories/")
  };

  getNodes = () => {
    return this.get("/nodes/")
  };

}

export default new Api();
