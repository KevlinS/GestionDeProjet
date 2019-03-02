<template lang="html">
    <div class="projet-list">
        <table class="table">
            <tr>
                <th>Nom du projet</th>
                <th>Description du projet</th>
                <th>Date de début</th>
                <th>Date de fin</th>
                <th>Le montant total du projet</th>
                <th>Le statut</th>
            </tr>
            <tr v-for="projet in projets">
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

import ProjetsService from '../services/ProjetsService'

export default {
  data () {
    return {
      projets: []
    }
  },
  created () {
    ProjetsService.getProjets()
      .then((data) => {
        this.projets = data
      })
      .catch(error => { console.log(error) })
  }
}
</script>
