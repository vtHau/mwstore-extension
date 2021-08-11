import * as config from "./../config/config";

export default function callApi(endpoint, method = "GET", body) {
  return fetch(`${config.API_URL}${endpoint}`, {
    method: method,
    body: JSON.stringify(body),
  })
    .catch((err) => {
      console.log(err);
    })
    .then((res) => res.json())
    .then((res) => res);
}
