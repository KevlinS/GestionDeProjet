<script>
const myApiUrl = 'http://localhost:3000/api/v1/client/'

export default {
  getClients () {
    return fetch(myApiUrl)
      .then((response) => {
        return response.json()
      })
  },
  createClient (nomEntreprise, nomClient, prenomClient, adresseClient, telephoneClient, mailClient, secteurActivite) {
    return fetch(myApiUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nomEntreprise': nomEntreprise,
          'nomClient': nomClient,
          'prenomClient': prenomClient,
          'adresseClient': adresseClient,
          'telephoneClient': telephoneClient,
          'mailClient': mailClient,
          'secteurActivite': secteurActivite
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  deleteClient (id) {

  },
  editClient (id, nomEntreprise, nomClient, prenomClient, adresseClient, telephoneClient, mailClient, secteurActivite) {
    return fetch(myApiUrl + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nomEntreprise': nomEntreprise,
          'nomClient': nomClient,
          'prenomClient': prenomClient,
          'adresseClient': adresseClient,
          'telephoneClient': telephoneClient,
          'mailClient': mailClient,
          'secteurActivite': secteurActivite
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  getClient (id) {
    console.log(myApiUrl + id)
    return fetch(myApiUrl + id)
      .then((response) => {
        return response.json()
      })
  }
}
</script>
