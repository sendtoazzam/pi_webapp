export default function authHeader() {
  let token = localStorage.getItem('token');
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { 
      "Accept": "application/json",
      "X-AUTH-USER-DATA": token 
    }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
