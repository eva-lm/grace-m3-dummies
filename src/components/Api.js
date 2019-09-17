const ENDPOINT = "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/";

const Api = (props) => {
  fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(props.userInfo),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function (resp) { return resp.json(); })
    .then(function (result) {
      showResult = () => {
        console.log(result)
      }
    })
    // Función para pintar URL o ERROR
    .catch(function (error) { console.log(error); });
}

export default Api;


