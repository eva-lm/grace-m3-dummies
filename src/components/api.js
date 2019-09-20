const ENDPOINT = "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/";


const api = data => {
  return fetch( ENDPOINT + 'card/', {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(function(resp) {
    return resp.json();
  })
  .then( function(result){
    return result;
  }).catch(function(error) {
    console.log(error);
    return error;
  });
}

export default api;


    
