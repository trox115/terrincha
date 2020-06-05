import axios from 'axios';

const baseUrl = 'https://terrinchapi.herokuapp.com/produtos/index';

export function getProdutos() {
  return axios
    .get(baseUrl, { withCredentials: true })
    .then(response => response)
    .catch(erro => erro);
}

export function test() {
  return 0;
}
