import axios from 'axios';

const baseUrl = 'http://localhost:3001/produtos';

export function getProdutos() {
  return axios
    .get(baseUrl, { withCredentials: true })
    .then(response => response.data)
    .catch(erro => erro);
}
