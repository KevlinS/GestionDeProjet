<script>
const myApiUrl = 'http://localhost:3000/api/v1/salarie/'

export default {
  getSalaries () {
    return fetch(myApiUrl)
      .then((response) => {
        return response.json()
      })
  },
  createSalarie (nomSalarie, prenomSalarie, usernameSalarie, dateDeNaissance, adresseSalarie, telephoneSalarie, mailSalarie, posteSalarie) {
    return fetch(myApiUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nomSalarie': nomSalarie,
          'prenomSalarie': prenomSalarie,
          'usernameSalarie': usernameSalarie,
          'dateDeNaissance': dateDeNaissance,
          'adresseSalarie': adresseSalarie,
          'telephoneSalarie': telephoneSalarie,
          'mailSalarie': mailSalarie,
          'posteSalarie': posteSalarie
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  deleteSalarie (id) {
    return fetch(myApiUrl + id, {
    method: 'delete',
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  editSalarie (id, nomSalarie, prenomSalarie, usernameSalarie, dateDeNaissance, adresseSalarie, telephoneSalarie, mailSalarie, posteSalarie) {
    return fetch(myApiUrl + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nomSalarie': nomSalarie,
          'prenomSalarie': prenomSalarie,
          'usernameSalarie': usernameSalarie,
          'dateDeNaissance': dateDeNaissance,
          'adresseSalarie': adresseSalarie,
          'telephoneSalarie': telephoneSalarie,
          'mailSalarie': mailSalarie,
          'posteSalarie': posteSalarie
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  getSalarie (id) {
    console.log(myApiUrl + id)
    return fetch(myApiUrl + id)
      .then((response) => {
        return response.json()
      })
  }
}
</script>
