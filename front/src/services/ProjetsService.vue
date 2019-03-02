<script>
const myApiUrl = 'http://localhost:3000/api/v1/projet'

export default {
  getProjets () {
    return fetch(myApiUrl)
      .then((response) => {
        return response.json()
      })
  },
  createProjet (nomProjet, descriptionProjet, dateDebut, dateFin, montantTotalProjet, statut) {
    return fetch(myApiUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nomProjet': nomProjet,
          'descriptionProjet': descriptionProjet,
          'dateDebut': dateDebut,
          'dateFin': dateFin,
          'montantTotalProjet': montantTotalProjet,
          'statut': statut
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  deleteProjet (id) {

  },
  editProjet (id, nomProjet, descriptionProjet, dateDebut, dateFin, montantTotalProjet, statut) {
    return fetch(myApiUrl + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nomProjet': nomProjet,
          'descriptionProjet': descriptionProjet,
          'dateDebut': dateDebut,
          'dateFin': dateFin,
          'montantTotalProjet': montantTotalProjet,
          'statut': statut
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  getProjet (id) {
    console.log(myApiUrl + id)
    return fetch(myApiUrl + id)
      .then((response) => {
        return response.json()
      })
  }
}
</script>
