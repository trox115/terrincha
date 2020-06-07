import axios from 'axios';

function session(email, password) {
  console.log(email);
  return axios
    .post(
      'http://localhost:3001/sessions/create',
      {
        user: {
          email,
          password,
        },
      },
      { withCredentials: true },
    )
    .then(response => response)
    .catch(erro => erro);
}

function Register({ ...props }) {
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
    .then(session(email, password))
    .catch(response => response);
}

export default Register;
