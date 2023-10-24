import axios from 'axios';

const API_URL = meta.env.API_GATEWAY;

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'auth/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
          localStorage.setItem('token', response.data.data.accessToken);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'auth/register', {
      username: user.username,
      email: user.email,
      password: user.password,
      confirmPassword: user.cpassword
    });
  }
}

export default new AuthService();
