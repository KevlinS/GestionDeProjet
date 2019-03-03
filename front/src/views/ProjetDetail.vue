<template lang="html">
    <div class="projet-detail">
        <table class="table">
            <tr>
                <th>Nom du projet</th>
                <th>Description du projet</th>
                <th>Date de début</th>
                <th>Date de fin</th>
                <th>Montant total du projet</th>
                <th>Le statut</th>
            </tr>
            <tr>
                <td>{{projet.nomProjet}}</td>
                <td>{{projet.descriptionProjet}}</td>
                <td>{{projet.dateDebut}}</td>
                <td>{{projet.dateFin}}</td>
                <td>{{projet.montantTotalProjet}}</td>
                <td>{{projet.statut}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import ProjetsService from '../services/ProjetsService.vue'

export default {

  data () {
    return {
      projet: []
    }
  },

  created () {
    let paramsId = this.$route.params.id
    console.log(paramsId)
    ProjetsService.getProjet(paramsId)
      .then((data) => {
        this.projet = data
        console.log(this.projet)
      })
      .catch(error => {
        console.log(error)
      })
  }

}
</script>

<style lang="css" scoped>
</style>
