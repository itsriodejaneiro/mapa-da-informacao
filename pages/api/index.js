import axios from "axios";

let url = "https://staging-mapa-da-informacao-api.herokuapp.com/"

const dev = process.env.NODE_ENV !== 'production';

console.log(process.env.NODE_ENV, process.env.STATUS)

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
