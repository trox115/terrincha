import axios from 'axios';

export function registoCli({ ...props }) {
  // eslint-disable-next-line camelcase
  const { email, name, phone, password, password_confirmation } = props;

  return axios
    .post(
      //'http://localhost:3001/clientes/create',
      'http://localhost:3001/clientes/create',
      {
        user: {
          email,
          name,
          phone,
          password,
          password_confirmation,
        },
      },
      true,
    )
    .then(response => response)
    .catch(response => response);
}

export function deleteSession() {
  return axios
    .delete('http://localhost:3001/logout', {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}

export function casaOcupad(casa) {
  return axios
    .put(`http://localhost:3001/casas/${casa.id}`, {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}

export function casaSuja(casa) {
  return axios
    .put(`http://localhost:3001/checkout/${casa}`, {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}

export function InserirPA(cliente_id, casa_id, horas) {
  return axios
    .post(
      //'http://localhost:3001/clientes/create',
      'http://localhost:3001/palmoco/create',
      {
        palmoco: {
          cliente_id,
          casa_id,
          horas,
        },
      },
      true,
    )
    .then(response => response)
    .catch(response => response);
}
