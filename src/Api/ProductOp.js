import axios from 'axios';

const baseUrl = 'http://localhost:3001/produtos/index';

export function getProdutos() {
  return axios
    .get(baseUrl, { withCredentials: true })
    .then(response => response)
    .catch(erro => erro);
}

export function test() {
  return 0;
}
