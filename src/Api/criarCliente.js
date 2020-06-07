import axios from 'axios';

function Register({ ...props }) {
  // eslint-disable-next-line camelcase
  const { email, name, phone } = props;

  return axios
    .post(
      'http://localhost:3001/clientes/create',
      {
        user: {
          email,
          name,
          phone,
        },
      },
      true,
    )
    .then(response => response)
    .catch(response => response);
}

export default Register;
