import axios from 'axios';

export function registoCli({ ...props }) {
  // eslint-disable-next-line camelcase
  const { email, name, phone, password, password_confirmation } = props;

  return axios
    .post(
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

export function bother() {
  console.log('bother');
}
