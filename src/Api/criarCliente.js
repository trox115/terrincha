import axios from 'axios';

export function registoCli({ ...props }) {
  // eslint-disable-next-line camelcase
  const { email, name, phone, password, password_confirmation } = props;

  return axios
    .post(
      //'http://localhost:3001/clientes/create',
      'https://terrinchapi.herokuapp.com/clientes/create',
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
    .delete('https://terrinchapi.herokuapp.com/logout', {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}

export function casaOcupad(casa) {
  return axios
    .put(`https://terrinchapi.herokuapp.com/casas/${casa.id}`, {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}

export function casaSuja(casa) {
  return axios
    .put(`https://terrinchapi.herokuapp.com/checkout/${casa}`, {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}
